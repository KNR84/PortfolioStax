using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Model;
using PortfolioStax.Repositories;
using System.Collections.Generic;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioItemController : ControllerBase
    {
        private readonly IPortfolioItemRepository _portfolioItemRepository;

        public PortfolioItemController(IPortfolioItemRepository portfolioItemRepository)
        {
            _portfolioItemRepository = portfolioItemRepository;
        }

        // GET: api/PortfolioItem
        [HttpGet]
        public IActionResult GetAll()
        {
            var portfolioItems = _portfolioItemRepository.GetAll();
            return Ok(portfolioItems);
        }

        // GET: api/PortfolioItem/5
        [HttpGet("{id}")]
        public IActionResult GetPortfolioItemById(int id)
        {
            var portfolioItem = _portfolioItemRepository.GetById(id);
            if (portfolioItem == null)
            {
                return NotFound("Portfolio item not found");
            }
            return Ok(portfolioItem);
        }

        // GET: api/PortfolioItem/portfolio/{portfolioItemId}
        [HttpGet("portfolio/{portfolioItemId}")]
        public IActionResult GetAllByPortfolioId(int portfolioItemId)
        {
            var portfolioItems = _portfolioItemRepository.GetAllByPortfolioId(portfolioItemId);
            if (portfolioItems == null || portfolioItems.Count == 0)
            {
                return NotFound("No portfolio items found for the specified portfolio ID");
            }
            return Ok(portfolioItems);
        }

        // POST: api/PortfolioItem
        [HttpPost]
        public IActionResult AddPortfolioItem([FromBody] PortfolioItem portfolioItem)
        {
            if (portfolioItem == null)
            {
                return BadRequest("Portfolio item data is null");
            }

            _portfolioItemRepository.AddPortfolioItem(portfolioItem);
            return CreatedAtAction(nameof(GetPortfolioItemById), new { id = portfolioItem.Id }, portfolioItem);
        }

        // PUT: api/PortfolioItem/5
        [HttpPut("{id}")]
        public IActionResult UpdatePortfolioItem(int id, [FromBody] PortfolioItem portfolioItem)
        {
            if (portfolioItem == null || id != portfolioItem.Id)
            {
                return BadRequest("Invalid portfolio item data");
            }

            var existingItem = _portfolioItemRepository.GetById(id);
            if (existingItem == null)
            {
                return NotFound("Portfolio item not found");
            }

            _portfolioItemRepository.UpdatePortfolioItem(portfolioItem);
            return NoContent();
        }

        // DELETE: api/PortfolioItem/5
        [HttpDelete("{id}")]
        public IActionResult DeletePortfolioItem(int id)
        {
            var existingItem = _portfolioItemRepository.GetById(id);
            if (existingItem == null)
            {
                return NotFound("Portfolio item not found");
            }

            _portfolioItemRepository.DeletePortfolioItem(id);
            return NoContent();
        }
    }
}
