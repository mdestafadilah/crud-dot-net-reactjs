using crud.Data;
using crud.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace crud.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    private readonly MyCrudDbContext _myCrudDbContext;

    public TestController(MyCrudDbContext myCrudDbContext)
    {
        _myCrudDbContext = myCrudDbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetTestAsync()
    {
        var tests = await _myCrudDbContext.Test.ToListAsync();
        return Ok(tests);
    }

    [HttpGet]
    [Route("id")]
    public async Task<IActionResult> GetTestByidAsync(string id) 
    {
        var test = await _myCrudDbContext.Test.FindAsync(id);
        return Ok(test);
    }

    [HttpPost]
    public async Task<IActionResult> PostTestAsync(Test test)
    {
        _myCrudDbContext.Test.Add(test);
        await _myCrudDbContext.SaveChangesAsync();
        return Created($"id?id={test.Id}", test);    
    }

    [HttpPut]
    public async Task<IActionResult> PutTestAsync(Test testToUpdate)
    {
        _myCrudDbContext.Test.Update(testToUpdate);
        await _myCrudDbContext.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete]
    [Route("id")]
    public async Task<IActionResult> DeleteTestAsync(string id)
    {
        var testToDelete = await _myCrudDbContext.Test.FindAsync(id);
        if (testToDelete == null)
        {
            return NotFound();
        }

        _myCrudDbContext.Test.Remove(testToDelete);
        await _myCrudDbContext.SaveChangesAsync();
        return NoContent();
    }

}