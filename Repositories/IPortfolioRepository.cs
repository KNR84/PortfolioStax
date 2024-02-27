using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioRepository
    {
        List<Portfolio> GetAll();
        Portfolio GetById(int id);
    }
}