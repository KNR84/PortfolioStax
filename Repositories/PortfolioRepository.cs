using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public class PortfolioRepository : BaseRepository, IPortfolioRepository
    {
        public PortfolioRepository(IConfiguration configuration) : base(configuration) { }

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
    }
}
