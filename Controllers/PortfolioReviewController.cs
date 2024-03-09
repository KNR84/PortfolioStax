using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Model;
using PortfolioStax.Repositories;


namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioReviewController : ControllerBase
    {
        private readonly IPortfolioReviewRepository _portfolioReviewRepository;

        public PortfolioReviewController(IPortfolioReviewRepository portfolioReviewRepository)
        {
            _portfolioReviewRepository = portfolioReviewRepository;
        }

        // GET: api/PortfolioReview
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_portfolioReviewRepository.GetAll());
        }

        // GET: api/PortfolioReview/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var portfolioReview = _portfolioReviewRepository.GetById(id);
            if (portfolioReview == null)
            {
                return NotFound();
            }
            return Ok(portfolioReview);
        }

        // POST: api/PortfolioReview
        [HttpPost]
        public IActionResult Post([FromBody] PortfolioReview portfolioReview)
        {
            _portfolioReviewRepository.Add(portfolioReview);
            return CreatedAtAction(nameof(Get), new { id = portfolioReview.Id }, portfolioReview);
        }

        // PUT: api/PortfolioReview/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] PortfolioReview portfolioReview)
        {
            if (id != portfolioReview.Id)
            {
                return BadRequest();
            }

            _portfolioReviewRepository.Update(portfolioReview);
            return NoContent();
        }

        // DELETE: api/PortfolioReview/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _portfolioReviewRepository.Delete(id);
            return NoContent();
        }
    }
}
