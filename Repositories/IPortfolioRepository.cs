using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioRepository
    {
        List<Portfolio> GetAll();
        List<Portfolio> GetPortfolioYearsByStudentId(int studentId);
        void Add(Portfolio portfolio);



    }
}