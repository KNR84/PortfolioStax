using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioDownloadRepository
    {
        //int Download(int portfolioItemId);
        // PortfolioDownloadRepository GetById(int id);

        PortfolioItem GetById(int id);
    }
}