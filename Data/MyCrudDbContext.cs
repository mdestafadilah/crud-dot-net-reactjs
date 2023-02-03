using crud.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace crud.Data;

public class MyCrudDbContext : DbContext
{
    public MyCrudDbContext(DbContextOptions<MyCrudDbContext> options) : base(options)
    {
        
    }
    public DbSet<Peserta> Peserta { get; set; }
    public DbSet<Test> Test { get; set; }

    public DbSet<DaftarPesertaTest> DaftarPesertaTest { get; set; }
}