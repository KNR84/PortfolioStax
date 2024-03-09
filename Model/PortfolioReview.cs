namespace PortfolioStax.Model
{
    public class PortfolioReview
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int PortfolioId { get; set; }
        public bool IsApproved { get; set; }
        public string ReviewNotes { get; set; }
    }
}
