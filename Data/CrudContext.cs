using Microsoft.EntityFrameworkCore;

public class CrudContext : DbContext
{
    public CrudContext(DbContextOptions<CrudContext> options) : base(options){}
    public DbSet<Peserta> Peserta { get; set; }
    public DbSet<Test> Test { get; set; }

    public DbSet<DaftarPesertaTest> DaftarPesertaTest { get; set; }
}