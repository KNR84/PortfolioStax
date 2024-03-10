using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public class PortfolioUploadRepository : IPortfolioUploadRepository
    {
        private readonly string? _uploadFolderPath;

        //public PortfolioUploadRepository(string uploadFolderPath)
        //{
        //    _uploadFolderPath = uploadFolderPath;
        //}


        public PortfolioUploadRepository()
        {
            //_uploadFolderPath = uploadFolderPath;
        }


        public async Task<string> SaveFileAsync(UploadedFile uploadedFile)
        {
            if (uploadedFile == null || uploadedFile.Data == null || uploadedFile.Data.Length == 0)
                throw new ArgumentNullException(nameof(uploadedFile), "File data is invalid.");

            // Ensure the upload folder exists
            Directory.CreateDirectory(_uploadFolderPath);

            // Generate a unique file name (you can customize this logic as needed)
            string fileName = Guid.NewGuid().ToString() + Path.GetExtension(uploadedFile.FileName);
            string filePath = Path.Combine(_uploadFolderPath, fileName);

            // Write the file data to disk
            await using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await fileStream.WriteAsync(uploadedFile.Data, 0, uploadedFile.Data.Length);
            }

            // Return the URL of the saved file
            return Path.Combine("/uploads", fileName); // Assuming uploads are served from the /uploads folder
        }

      
    }
}
