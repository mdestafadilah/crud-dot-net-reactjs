namespace crud.Data.Entities;

public class PesertaTest 
{
    public string Id { get; set; }          = string.Empty;
    public string PesertaId { get; set; }   = string.Empty;
    public Peserta? Peserta { get; set; }   = null;
    public string TestId { get; set; }      = string.Empty;
    public Test? Test { get; set; }         = null;
}