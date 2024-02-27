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

        // GET: api/Portfolio
        [HttpGet]
        public IActionResult GetAll()
        {
            var portfolios = _portfolioRepository.GetAll();
            return Ok(portfolios);
        }
        
        //Get Portfolio by ID
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _portfolioRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }
    }

    
}
