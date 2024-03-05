using PortfolioStax.Model;
using PortfolioStax.Utils;

namespace PortfolioStax.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(IConfiguration configuration) : base(configuration) { }

        //gets all events as well as the students they are assigned to
        public List<Event> GetAllWithStudentDetails()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT e.Id AS EventId, e.StudentId, e.EventType, e.EventName, e.EventDate,
                       s.FirstName AS StudentFirstName, s.LastName AS StudentLastName
                FROM [Event] e
                JOIN Student s ON e.StudentId = s.Id
                ORDER BY e.EventDate";

                    var reader = cmd.ExecuteReader();

                    var events = new List<Event>();
                    while (reader.Read())
                    {
                        events.Add(new Event()
                        {
                            Id = DbUtils.GetInt(reader, "EventId"),
                            StudentId = DbUtils.GetInt(reader, "StudentId"),
                            EventType = DbUtils.GetString(reader, "EventType"),
                            EventName = DbUtils.GetString(reader, "EventName"),
                            EventDate = DbUtils.GetDateTime(reader, "EventDate"),
                            StudentFirstName = DbUtils.GetString(reader, "StudentFirstName"),
                            StudentLastName = DbUtils.GetString(reader, "StudentLastName"),
                        });
                    }

                    reader.Close();

                    return events;
                }
            }
        }

        //gets events by child - filters by parent id and student id to only get events for my children
        public List<Event> GetEventsByChildIdInHousehold(int childId, int parentId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT e.Id, e.StudentId, e.EventType, e.EventName, e.EventDate,
                       s.FirstName AS StudentFirstName, s.LastName AS StudentLastName
                FROM [Event] e
                JOIN Student s ON e.StudentId = s.Id
                WHERE s.ParentId = @ParentId AND e.StudentId = @ChildId -- Filter events based on the parent's ID and the child's ID
                ORDER BY e.EventDate";

                    DbUtils.AddParameter(cmd, "@ParentId", parentId);
                    DbUtils.AddParameter(cmd, "@ChildId", childId);

                    var reader = cmd.ExecuteReader();

                    var events = new List<Event>();
                    while (reader.Read())
                    {
                        events.Add(new Event()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            StudentId = DbUtils.GetInt(reader, "StudentId"),
                            EventType = DbUtils.GetString(reader, "EventType"),
                            EventName = DbUtils.GetString(reader, "EventName"),
                            EventDate = DbUtils.GetDateTime(reader, "EventDate"),
                            StudentFirstName = DbUtils.GetString(reader, "StudentFirstName"),
                            StudentLastName = DbUtils.GetString(reader, "StudentLastName"),
                        });
                    }

                    reader.Close();

                    return events;
                }
            }
        }

        //add an event
        public void Add(Event eventItem)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO Event (Name, StudentId, EventType, EventDate)
                OUTPUT INSERTED.ID
                VALUES (@Name, @StudentId, @EventType, @EventDate)";

                    DbUtils.AddParameter(cmd, "Name", eventItem.EventName);
                    DbUtils.AddParameter(cmd, "StudentId", eventItem.StudentId);
                    DbUtils.AddParameter(cmd, "EventType", eventItem.EventType);
                    DbUtils.AddParameter(cmd, "EventDate", eventItem.EventDate);

                    eventItem.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(Event eventItem)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE Event
                SET Name = @Name, 
                    StudentId = @StudentId, 
                    EventType = @EventType, 
                    EventDate = @EventDate
                WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "Name", eventItem.EventName);
                    DbUtils.AddParameter(cmd, "StudentId", eventItem.StudentId);
                    DbUtils.AddParameter(cmd, "EventType", eventItem.EventType);
                    DbUtils.AddParameter(cmd, "EventDate", eventItem.EventDate);
                    DbUtils.AddParameter(cmd, "Id", eventItem.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Delete(int eventId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                DELETE FROM Event
                WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "Id", eventId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

