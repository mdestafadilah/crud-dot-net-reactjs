namespace crud.Data.Entities;

public class Peserta 
{
    public string Id { get; set; }              = string.Empty;
    public string NamaDepan { get; set; }       = string.Empty;
    public string NamaBelakang { get; set; }    = string.Empty;
    // public ICollection<PesertaTest> Test { get; set; } = new HashSet<PesertaTest>();   
}