﻿using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Repositories; // Import your repository here
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;


namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        private readonly UploadFileRepository _uploadFileRepository; // Replace with your repository interface

        public FileUploadController(UploadFileRepository uploadFileRepository) // Replace with your repository interface
        {
            _uploadFileRepository = uploadFileRepository;
        }

        // POST: api/FileUpload
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> UploadFile(IFormFile file, int id)
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

            Model.UploadedPortfolioFile u = new Model.UploadedPortfolioFile();
            u.FilePath = filePath;
            u.PortfolioItemId = id;
            _uploadFileRepository.UploadPortfolioItemFile(u);

            // Save file to database using your repository
            // Example: _portfolioReviewRepository.SaveFile(file);

            // Return success response with file URL
            var fileUrl = "https://example.com/files/" + file.FileName; // Example file URL
            return Ok(new { fileUrl });
        }
    }
}
