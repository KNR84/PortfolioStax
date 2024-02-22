namespace PortfolioStax.Model
{
    public class User
    {
        public int Id { get; set; }
        public bool IsReviewer { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Guid { get; set; }
    }
}