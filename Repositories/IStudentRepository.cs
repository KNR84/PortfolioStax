using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IStudentRepository
    {
        List<Student> GetAll();
        Student GetById(int id);
        void Add (Student student);
        
    }
}