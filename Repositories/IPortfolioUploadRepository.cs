
using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IPortfolioUploadRepository
    {
        Task<string> SaveFileAsync(UploadedFile uploadedFile);
    }
}