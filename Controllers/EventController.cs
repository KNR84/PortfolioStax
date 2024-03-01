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
        public IActionResult Event(Event @event)
        {
            _eventRepository.Add(@event);
            return CreatedAtAction("Get", new { id = @event.Id }, @event);
        }

        // Edit event
        [HttpPut("{id}")]
        public IActionResult Put(int id, Event @event)
        {
            if (id != @event.Id)
            {
                return BadRequest();
            }

            _eventRepository.Update(@event); 
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
