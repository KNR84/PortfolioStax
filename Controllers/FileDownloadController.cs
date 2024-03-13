using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using PortfolioStax.Model;
using PortfolioStax.Repositories;
using System.Net;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

        public class PortfolioDownloadController : ControllerBase
        {
            private readonly IPortfolioDownloadRepository _portfolioDownloadRepository;

            public PortfolioDownloadController(IPortfolioDownloadRepository portfolioDownloadRepository)
            {
                _portfolioDownloadRepository = portfolioDownloadRepository;
            }

            [HttpGet]
            [Route("download")]
            public IActionResult Get(int portfolioItemID)
            {
                PortfolioItem id = _portfolioDownloadRepository.GetById(portfolioItemID);
            if (id.FilePath != null) 
            {
                Byte[] b = System.IO.File.ReadAllBytes(id.FilePath);
                return File(b, "image/jpeg");
            }

            //return new HttpStatusCodeResult((int)HttpStatusCode.InternalServerError);
            return StatusCode(500);
            //return Ok(id);
            }
        }
    }


 