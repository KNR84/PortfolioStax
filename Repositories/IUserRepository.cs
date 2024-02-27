using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User GetByEmail(string email);
        void Add(User user);
        User GetById(int id);

    }
}