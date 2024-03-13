using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using PortfolioStax.Model;
using PortfolioStax.Repositories;

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
                //Byte[] b = System.IO.File.ReadAllBytes(Path);
                //return File(b, "image/jpeg");

                return Ok(id);
            }
        }
    }


 