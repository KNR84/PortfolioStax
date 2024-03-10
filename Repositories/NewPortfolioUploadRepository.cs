using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using PortfolioStax.Model;
using PortfolioStax.Utils;



namespace PortfolioStax.Repositories
{
    public class NewPortfolioUploadRepository : BaseRepository
    {
        public NewPortfolioUploadRepository(IConfiguration configuration) : base(configuration) { }
        public void NewPortfolioUpload(NewPortfolioUpload uploadedFile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE PortfolioItem
SET FilePath = @filePath
WHERE Id = @Id;";

                    DbUtils.AddParameter(cmd, "@filePath", uploadedFile.FilePath);
                    DbUtils.AddParameter(cmd, "@Id", uploadedFile.PortfolioItemId);


                    int rowsAffected = cmd.ExecuteNonQuery();

                    if (rowsAffected == 0)
                    {
                        throw new Exception("No rows were updated. Portfolio may not exist.");
                    }



                }
            }
        }
    }
}
