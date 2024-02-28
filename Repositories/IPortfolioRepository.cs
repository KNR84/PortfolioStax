using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioRepository
    {
        List<Portfolio> GetPortfolioYearsByStudentId(int studentId);

    }
}