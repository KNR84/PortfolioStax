using System;

namespace PortfolioStax.Model
{
    public class PortfolioItem
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public string ItemType { get; set; }
        public DateTime CompletedDateTime { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int PortfolioId { get; set; }
        public string? FilePath { get; set; }
    }
}
