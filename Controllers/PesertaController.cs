using crud.Data;
using crud.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace crud.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PesertaController : ControllerBase
{
    // Buat Koneksi Ke DB
    private readonly MyCrudDbContext _myCrudDbContext;
    public PesertaController(MyCrudDbContext myCrudDbContext)
    {
        _myCrudDbContext = myCrudDbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetPesertaAsync()
    {
        var pesertas = await _myCrudDbContext.Peserta.ToListAsync();
        return Ok(pesertas);
    }

    [HttpGet]
    [Route("id")]
    public async Task<IActionResult> GetPesertaByidAsync(string id) 
    {
        var peserta = await _myCrudDbContext.Peserta.FindAsync(id);
        return Ok(peserta);
    }

    [HttpPost]
    public async Task<IActionResult> PostPesertaAsync(Peserta peserta)
    {
        _myCrudDbContext.Peserta.Add(peserta);
        await _myCrudDbContext.SaveChangesAsync();
        return Created($"id?id={peserta.Id}", peserta);    
    }

    [HttpPut]
    public async Task<IActionResult> PutPesertaAsync(Peserta pesertaToUpdate)
    {
        _myCrudDbContext.Peserta.Update(pesertaToUpdate);
        await _myCrudDbContext.SaveChangesAsync();
        return NoContent();
    }

    [Route("id")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePesertaAsync(string id)
    {
        var pesertaToDelete = await _myCrudDbContext.Peserta.FindAsync(id);
        if (pesertaToDelete == null)
        {
            return NotFound();
        }

        _myCrudDbContext.Peserta.Remove(pesertaToDelete);
        await _myCrudDbContext.SaveChangesAsync();
        return NoContent();
    }
};