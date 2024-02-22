using Microsoft.VisualBasic;

namespace PortfolioStax.Model
{
    public class Reminder
    {
        public int Id { get; set; }
        public int ParentUserId { get; set; }
        public string ReminderText { get; set; }
        public DateTime DueDate { get; set; }

    }
}
