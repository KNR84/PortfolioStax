//using Microsoft.Extensions.Configuration;
//using System.Collections.Generic;
//using System.Data.SqlClient;
//using PortfolioStax.Repositories;
//using PortfolioStax.Utils;
//using PortfolioStax.Model;

//namespace PortfolioStax.Repositories
//{
//    public class PortfolioRepository : BaseRepository, IPortfolioRepository
//    {

//        public PortfolioRepository(IConfiguration configuration) : base(configuration) { }

//        public List<Portfolio> GetAll()
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"
//                SELECT p.Id AS PortfolioId, p.StudentId, p.StartYear, p.FinishYear,
//                       s.Id AS StudentId, s.FirstName, s.LastName, s.GradeLevel
//                FROM Portfolio p
//                INNER JOIN Student s ON p.StudentId = s.Id
//                WHERE s.ParentId = StudentId";

//                    var reader = cmd.ExecuteReader();

//                    var portfolios = new List<Portfolio>();
//                    while (reader.Read())
//                    {
//                        portfolios.Add(new Portfolio()
//                        {
//                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
//                            StudentId = DbUtils.GetInt(reader, "StudentId"),
//                            StartYear = DbUtils.GetString(reader, "StartYear"),
//                            FinishYear = DbUtils.GetString(reader, "FinishYear")


//                        });
//                    }

//                    reader.Close();

//                    return portfolios;
//                }
//            }
//        }
      

//    }
//}