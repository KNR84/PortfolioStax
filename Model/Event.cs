using System;

namespace PortfolioStax.Model
{
    public class Event
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public string EventType { get; set; }
        public string EventName { get; set; }
        public DateTime EventDate { get; set; }
    }
}
