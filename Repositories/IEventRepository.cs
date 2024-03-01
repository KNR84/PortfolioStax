using PortfolioStax.Model;

namespace PortfolioStax.Repositories
{
    public interface IEventRepository
    {
        void Add(Event eventItem);
        void Delete(int eventId);
        List<Event> GetAllWithStudentDetails();
        List<Event> GetEventsByChildIdInHousehold(int childId, int parentId);
        void Update(Event eventItem);
    }
}