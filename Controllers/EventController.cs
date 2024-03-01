using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using PortfolioStax.Model;
using PortfolioStax.Repositories;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   
    public class EventController : ControllerBase
    {
        private readonly IEventRepository _eventRepository;
        public EventController(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }
        
        // GetAllWithStudentDetails 
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_eventRepository.GetAllWithStudentDetails());
        }


        
        // GET: api/Event/GetEventsByChildIdInHousehold/{childId}/{parentId}
        [HttpGet("GetEventsByChildIdInHousehold/{childId}/{parentId}")]
        public IActionResult GetEventsByChildIdInHousehold(int childId, int parentId)
        {
            var events = _eventRepository.GetEventsByChildIdInHousehold(childId, parentId);
            if (events == null || events.Count == 0)
            {
                return NotFound();
            }
            return Ok(events);
        }
    }

    //// add new >
    //[HttpPost]
    //public IActionResult Category(Category category)
    //{
    //    _categoryRepository.Add(category);
    //    return CreatedAtAction("Get", new { id = category.Id }, category);
    //}
}