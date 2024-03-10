using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Repositories; // Import your repository here
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        private readonly IPortfolioUploadRepository _portfolioUploadRepository; // Replace with your repository interface

        public FileUploadController(IPortfolioUploadRepository portfolioUploadRepository) // Replace with your repository interface
        {
            _portfolioUploadRepository = portfolioUploadRepository;
        }

        // POST: api/FileUpload
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("File is not selected.");

            //System.IO.File.Copy(file, dest, true);
            //System.IO.File.SetAttributes("C:/test", FileAttributes.Normal);


            var filePath = Path.Combine(@"C:\test", file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Save file to database using your repository
            // Example: _portfolioReviewRepository.SaveFile(file);

            // Return success response with file URL
            var fileUrl = "https://example.com/files/" + file.FileName; // Example file URL
            return Ok(new { fileUrl });
        }
    }
}
