﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioStax.Model;
using PortfolioStax.Repositories;

namespace PortfolioStax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;

        public StudentController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        // GET: StudentController
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_studentRepository.GetAll());
        }
       
        
        //GET student by id
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _studentRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        // add new student
        [HttpPost]
        public IActionResult Student(Student student)
        {
            _studentRepository.Add(student);
            return CreatedAtAction("Get", new { id = student.Id }, student);
        }


        // PUT api/<CategoriesController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            _studentRepository.Update(student);
            return NoContent();
        }

        // DELETE student
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _studentRepository.Delete(id);
            return NoContent();
        }
    }


}


