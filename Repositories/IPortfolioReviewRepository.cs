using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioReviewRepository
    {
        void Add(PortfolioReview portfolioReview);
        void Delete(int id);
        List<PortfolioReview> GetAll();
        PortfolioReview GetById(int id);
        void Update(PortfolioReview portfolioReview);
    }
}