using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        
    }
}