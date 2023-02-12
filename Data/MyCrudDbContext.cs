using crud.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace crud.Data;

public class MyCrudDbContext : DbContext
{
    public DbSet<Peserta>? Peserta { get; set; }            = null;
    public DbSet<Test>? Test { get; set; }                  = null;
    public DbSet<PesertaTest>? PesertaTest { get; set; }    = null;

    // private readonly IConfiguration _configuration;

    public MyCrudDbContext(DbContextOptions<MyCrudDbContext> options /*,IConfiguration configuration*/ ) : base(options)
    {
        // _configuration = configuration;
    }

    // protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     modelBuilder.Entity<PesertaTest>().HasKey(x => new { x.PesertaId, x.TestId });
    //     modelBuilder.Entity<PesertaTest>().HasOne(x => x.Peserta)
    //                                       .WithMany(x => x.Test)
    //                                       .HasForeignKey(x => x.PesertaId);
    //     modelBuilder.Entity<PesertaTest>().HasOne(x => x.Test)
    //                                       .WithMany(x => x.Peserta)
    //                                       .HasForeignKey(x => x.TestId);
    //     base.OnModelCreating(modelBuilder);
    // }

    // protected override void OnConfiguring(DBContextOptionsBuilder optionsBuilder)
    // {
    //     if(!optionsBuilder.IsConfigured)
    //         optionsBuilder.UseSqlServer(_configuration.GetConnectionString(nameof(MyCrudDbContext)));
    // }
}