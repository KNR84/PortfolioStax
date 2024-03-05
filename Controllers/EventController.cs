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

        // Add new event
        [HttpPost]
        public IActionResult Event(Event eventItem)
        {
            _eventRepository.Add(eventItem);
            return CreatedAtAction("Get", new { id = eventItem.Id }, eventItem);
        }

        // Edit event
        [HttpPut("{id}")]
        public IActionResult Put(int id, Event eventItem)
        {
            if (id != eventItem.Id)
            {
                return BadRequest();
            }

            _eventRepository.Update(eventItem);
            return NoContent();
        }

        // DELETE event
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _eventRepository.Delete(id);
            return NoContent();
        }
    }
}
