using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Model;
using PortfolioStax.Repositories;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewPortfolioUploadController : ControllerBase
    {

        private readonly NewPortfolioUploadRepository _newPortfolioUploadRepository;
        //private readonly IStudentRepository _studentRepository;

        public NewPortfolioUploadController(NewPortfolioUploadRepository newPortfolioUploadRepository)
        {
            _newPortfolioUploadRepository = newPortfolioUploadRepository;
        }
        //// POST: api/PortfolioItem
        //[HttpPost]
        //public IActionResult Add([FromBody] NewPortfolioUpload newPortfolioUpload)
        //{
        //    if (newPortfolioUpload == null)
        //    {
        //        return BadRequest("Portfolio item data is null");
        //    }

        //    //_newPortfolioUploadRepository.AddPortfolioItem(portfolioItem);
        //    //return CreatedAtAction(nameof(GetNewPortfolioUploadById), new { id = portfolioItem.Id }, portfolioItem);
        //    return Ok(new { newPortfolioUpload.FileName });
        //}



        // POST: api/PortfolioItem
        [HttpPost]
        [Route("upload")]
        public async Task <IActionResult> NewUploadFile(IFormFile file, int id)

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

            Model.NewPortfolioUpload u = new Model.NewPortfolioUpload();
            u.FilePath = filePath;
            u.PortfolioItemId = id;
            _newPortfolioUploadRepository.NewPortfolioUpload(u);

            // Save file to database using your repository
            // Example: _portfolioReviewRepository.SaveFile(file);

            // Return success response with file URL
            var fileUrl = "https://example.com/files/" + file.FileName; // Example file URL
            return Ok(new { filePath });
        }

    }

}
