using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Model;
using PortfolioStax.Repositories;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioRepository _portfolioRepository;

        public PortfolioController(IPortfolioRepository portfolioRepository)
        {
            _portfolioRepository = portfolioRepository;
        }
        // GET: api/Portfolio/{studentId}
        [HttpGet("{studentId}")]
        public IActionResult GetPortfolioYearsByStudentId(int studentId) // Added parameter
        {
            var portfolios = _portfolioRepository.GetPortfolioYearsByStudentId(studentId); // Pass studentId to repository method
            return Ok(portfolios);
        }


    }


}
