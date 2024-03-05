using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using PortfolioStax.Model;
using PortfolioStax.Utils;

namespace PortfolioStax.Repositories
{
    public class PortfolioRepository : BaseRepository, IPortfolioRepository
    {
        public PortfolioRepository(IConfiguration configuration) : base(configuration) { }


        public List<Portfolio> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT p.Id, p.StudentId, p.StartYear, p.FinishYear,
                       s.ParentId, s.FirstName, s.LastName, s.GradeLevel
                FROM Portfolio p
                JOIN Student s ON p.StudentId = s.Id";

                    var portfolios = new List<Portfolio>();
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            portfolios.Add(new Portfolio()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                StartYear = DbUtils.GetString(reader, "StartYear"),
                                FinishYear = DbUtils.GetString(reader, "FinishYear"),
                                StudentId = DbUtils.GetInt(reader, "StudentId"),
                                Student = new Student
                                {
                                    Id = DbUtils.GetInt(reader, "StudentId"),
                                    ParentId = DbUtils.GetInt(reader, "ParentId"),
                                    FirstName = DbUtils.GetString(reader, "FirstName"),
                                    LastName = DbUtils.GetString(reader, "LastName"),
                                    GradeLevel = DbUtils.GetInt(reader, "GradeLevel")
                                }
                            });
                        }
                    }

                    return portfolios;
                }
            }
        }


        public List<Portfolio> GetPortfolioYearsByStudentId(int studentId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT p.Id AS PortfolioId, p.StartYear, p.FinishYear, p.StudentId,
                               s.Id AS StudentId, s.ParentId, s.FirstName, s.LastName, s.GradeLevel
                        FROM Portfolio p
                        JOIN Student s ON p.StudentId = s.Id
                        WHERE p.StudentId = @StudentId";

                    cmd.Parameters.AddWithValue("@StudentId", studentId);

                    var reader = cmd.ExecuteReader();

                    var portfolios = new List<Portfolio>();
                    while (reader.Read())
                    {
                        portfolios.Add(new Portfolio()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("PortfolioId")),
                            StartYear = reader.GetString(reader.GetOrdinal("StartYear")),
                            FinishYear = reader.GetString(reader.GetOrdinal("FinishYear")),
                            StudentId = reader.GetInt32(reader.GetOrdinal("StudentId")),
                            Student = new Student
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("StudentId")),
                                ParentId = reader.GetInt32(reader.GetOrdinal("ParentId")),
                                FirstName = reader.GetString(reader.GetOrdinal("FirstName")),
                                LastName = reader.GetString(reader.GetOrdinal("LastName")),
                                GradeLevel = reader.GetInt32(reader.GetOrdinal("GradeLevel"))
                            }
                        });
                    }

                    reader.Close();

                    return portfolios;
                }
            }
        }

        public void Add(Portfolio portfolio)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO Portfolio (StudentId, StartYear, FinishYear)
                OUTPUT INSERTED.Id
                VALUES (@StudentId, @StartYear, @FinishYear)";

                   
                    cmd.Parameters.AddWithValue("@StudentId", portfolio.StudentId);
                    cmd.Parameters.AddWithValue("@StartYear", portfolio.StartYear);
                    cmd.Parameters.AddWithValue("@FinishYear", portfolio.FinishYear);

                    portfolio.Id = (int)cmd.ExecuteScalar();

                    // Now, populate the remaining data from the Student table
                    cmd.CommandText = @"
                SELECT s.ParentId, s.FirstName, s.LastName, s.GradeLevel
                FROM Student s
                WHERE s.Id = @StudentId";

                    // Reusing the same cmd object, just resetting parameters
                    cmd.Parameters.Clear();
                    cmd.Parameters.AddWithValue("@StudentId", portfolio.StudentId);

                    using (var reader = cmd.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            portfolio.Student = new Student
                            {
                                Id = portfolio.StudentId,
                                ParentId = DbUtils.GetInt(reader, "ParentId"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                                GradeLevel = DbUtils.GetInt(reader, "GradeLevel")
                            };
                        }
                    }
                }
            }
        }

         public void Update(Portfolio portfolio)
        {
            try
            {
                using (var conn = Connection)
                {
                    conn.Open();

                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                    UPDATE Portfolio 
                    SET StartYear = @StartYear, FinishYear = @FinishYear 
                    WHERE Id = @Id";

                        cmd.Parameters.AddWithValue("@Id", portfolio.Id);
                        cmd.Parameters.AddWithValue("@StartYear", portfolio.StartYear);
                        cmd.Parameters.AddWithValue("@FinishYear", portfolio.FinishYear);

                        int rowsAffected = cmd.ExecuteNonQuery();

                        if (rowsAffected == 0)
                        {
                            throw new Exception("No rows were updated. Portfolio may not exist.");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Handle or log the exception
                Console.WriteLine($"Error: {ex.Message}");
                throw; // Rethrow the exception for the caller to handle
            }
        }







       
    }
}
