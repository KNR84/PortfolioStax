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

        // GET all portfolios
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_portfolioRepository.GetAll());
        }


        // GET: api/Portfolio/{studentId}
        [HttpGet("{studentId}")]
        public IActionResult GetPortfolioYearsByStudentId(int studentId) // Added parameter
        {
            var portfolios = _portfolioRepository.GetPortfolioYearsByStudentId(studentId); // Pass studentId to repository method
            return Ok(portfolios);
        }

        //add a portfolio
        [HttpPost]
        public IActionResult AddPortfolio([FromBody] Portfolio portfolio)
        {
            if (portfolio == null)
            {
                return BadRequest("Portfolio data is missing.");
            }

            // Validate portfolio data here if needed

            try
            {
                _portfolioRepository.Add(portfolio);
                return Ok("Portfolio added successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it as needed
                return StatusCode(500, "An error occurred while adding the portfolio.");
            }
        }

    }
}



