using PortfolioStax.Model;
using PortfolioStax.Utils;

namespace PortfolioStax.Repositories
{
    public class PortfolioDownloadRepository :BaseRepository, IPortfolioDownloadRepository
    {
        public PortfolioDownloadRepository(IConfiguration configuration) : base(configuration) { }
        //private readonly string? _downloadFolderPath;
        //public PortfolioDownloadRepository(string downloadFolderPath)
        //{
        //    _downloadFolderPath = downloadFolderPath;
        //}

        public PortfolioItem GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
            SELECT Id, StudentId, ItemType, CompletedDateTime, Title, Description, PortfolioId, FilePath
            FROM PortfolioItem
            WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    PortfolioItem portfolioItem = null;
                    if (reader.Read())
                    {
                        portfolioItem = new PortfolioItem()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StudentId = DbUtils.GetInt(reader, "StudentId"),
                            ItemType = DbUtils.GetString(reader, "ItemType"),
                            CompletedDateTime = DbUtils.GetDateTime(reader, "CompletedDateTime"),
                            Title = DbUtils.GetString(reader, "Title"),
                            Description = DbUtils.GetString(reader, "Description"),
                            PortfolioId = DbUtils.GetInt(reader, "PortfolioId"),
                            FilePath = DbUtils.GetString(reader, "FilePath"),
                        };
                    }

                    reader.Close();

                    return portfolioItem;
                }
            }
        }

        //public PortfolioDownloadRepository()
        //{
        //    //_uploadFolderPath = uploadFolderPath;
        //}


        //public async Task<string> SaveFileAsync(DownloadedFile downloadedFile)
        //{
        //    if (downloadedFile == null || downloadedFile.Data == null || downloadedFile.Data.Length == 0)
        //        throw new ArgumentNullException(nameof(downloadedFile), "File data is invalid.");

        //    // Ensure the upload folder exists
        //    Directory.CreateDirectory(_downloadFolderPath);

        //    // Generate a unique file name (you can customize this logic as needed)
        //    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(downloadedFile.FileName);
        //    string filePath = Path.Combine(_downloadFolderPath, fileName);

        //    // Write the file data to disk
        //    await using (var fileStream = new FileStream(filePath, FileMode.Create))
        //    {
        //        await fileStream.WriteAsync(downloadedFile.Data, 0, downloadedFile.Data.Length);
        //    }

        //    // Return the URL of the saved file
        //    return Path.Combine("/downloads", fileName); // Assuming uploads are served from the /uploads folder
        //}


    }
}




