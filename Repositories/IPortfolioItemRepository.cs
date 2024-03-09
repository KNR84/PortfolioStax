using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioItemRepository
    {
        void AddPortfolioItem(PortfolioItem portfolioItem);
        void DeletePortfolioItem(int id);
        List<PortfolioItem> GetAll();
        PortfolioItem GetById(int id);
        List<PortfolioItem> GetAllByPortfolioId(int portfolioItemId);
        void UpdatePortfolioItem(PortfolioItem portfolioItem);
    }
}