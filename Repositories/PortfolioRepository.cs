using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using PortfolioStax.Repositories;
using PortfolioStax.Utils;
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
                SELECT Id AS PortfolioId, StartYear, FinishYear, StudentId
                FROM Portfolio
                WHERE StudentId = @StudentId";

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
                            StudentId = reader.GetInt32(reader.GetOrdinal("StudentId"))
                        });
                    }

                    reader.Close();

                    return portfolios;
                }
            }
        }





    }
}