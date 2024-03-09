using PortfolioStax.Model;
using PortfolioStax.Utils;


namespace PortfolioStax.Repositories;
public class PortfolioItemRepository : BaseRepository, IPortfolioItemRepository
{
    public PortfolioItemRepository(IConfiguration configuration) : base(configuration) { }

    //getting all portfolio items from the database. 
    public List<PortfolioItem> GetAll()
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                SELECT Id, StudentId, ItemType, CompletedDateTime, Title,Description,PortfolioId
                FROM PortfolioItem";

                var reader = cmd.ExecuteReader();

                var portfolioItems = new List<PortfolioItem>();
                while (reader.Read())
                {
                    portfolioItems.Add(new PortfolioItem()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        StudentId = DbUtils.GetInt(reader, "StudentId"),
                        ItemType = DbUtils.GetString(reader, "ItemType"),
                        CompletedDateTime = DbUtils.GetDateTime(reader, "CompletedDateTime"),
                        Title = DbUtils.GetString(reader, "Title"),
                        Description = DbUtils.GetString(reader, "Description"),
                        PortfolioId = DbUtils.GetInt(reader, "PortfolioId"),


                    });
                }

                reader.Close();

                return portfolioItems;
            }
        }
    }

    //getting all portfolios from the database by their ID
    public PortfolioItem GetById(int id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
            SELECT Id, StudentId, ItemType, CompletedDateTime, Title, Description, PortfolioId
            FROM PortfolioItem
            WHERE Id = @Id";

                DbUtils.AddParameter(cmd, "@Id", id);

                var reader = cmd.ExecuteReader();

                PortfolioItem portfolioItem = null;
                if (reader.Read())
                {
                    portfolioItem = new PortfolioItem()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        StudentId = DbUtils.GetInt(reader, "StudentId"),
                        ItemType = DbUtils.GetString(reader, "ItemType"),
                        CompletedDateTime = DbUtils.GetDateTime(reader, "CompletedDateTime"),
                        Title = DbUtils.GetString(reader, "Title"),
                        Description = DbUtils.GetString(reader, "Description"),
                        PortfolioId = DbUtils.GetInt(reader, "PortfolioId")
                    };
                }

                reader.Close();

                return portfolioItem;
            }
        }
    }

    //getting portfolio items belonging to a specific portfolioID (ie all of Cohen's items.) 
    public List<PortfolioItem> GetAllByPortfolioId(int portfolioItemId)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
            SELECT Id, StudentId, ItemType, CompletedDateTime, Title, Description, PortfolioId
            FROM PortfolioItem
            WHERE PortfolioId = @PortfolioItemId";

                DbUtils.AddParameter(cmd, "@PortfolioItemId", portfolioItemId);

                var reader = cmd.ExecuteReader();

                var portfolioItems = new List<PortfolioItem>();
                while (reader.Read())
                {
                    portfolioItems.Add(new PortfolioItem()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        StudentId = DbUtils.GetInt(reader, "StudentId"),
                        ItemType = DbUtils.GetString(reader, "ItemType"),
                        CompletedDateTime = DbUtils.GetDateTime(reader, "CompletedDateTime"),
                        Title = DbUtils.GetString(reader, "Title"),
                        Description = DbUtils.GetString(reader, "Description"),
                        PortfolioId = DbUtils.GetInt(reader, "PortfolioId")
                    });
                }

                reader.Close();

                return portfolioItems;
            }
        }
    }




    public void AddPortfolioItem(PortfolioItem portfolioItem)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                INSERT INTO PortfolioItem (StudentId, ItemType, CompletedDateTime, Title, Description, PortfolioId)
                VALUES (@StudentId, @ItemType, @CompletedDateTime, @Title, @Description, @PortfolioId);
                SELECT SCOPE_IDENTITY();";

                DbUtils.AddParameter(cmd, "@StudentId", portfolioItem.StudentId);
                DbUtils.AddParameter(cmd, "@ItemType", portfolioItem.ItemType);
                DbUtils.AddParameter(cmd, "@CompletedDateTime", portfolioItem.CompletedDateTime);
                DbUtils.AddParameter(cmd, "@Title", portfolioItem.Title);
                DbUtils.AddParameter(cmd, "@Description", portfolioItem.Description);
                DbUtils.AddParameter(cmd, "@PortfolioId", portfolioItem.PortfolioId);

                portfolioItem.Id = Convert.ToInt32(cmd.ExecuteScalar());


              
            }
        }
    }



    public void UpdatePortfolioItem(PortfolioItem portfolioItem)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
            UPDATE PortfolioItem
            SET ItemType = @ItemType,
                CompletedDateTime = @CompletedDateTime,
                Title = @Title,
                Description = @Description,
                PortfolioId = @PortfolioId,
                StudentId = @StudentId
            WHERE Id = @Id";

                DbUtils.AddParameter(cmd, "@ItemType", portfolioItem.ItemType);
                DbUtils.AddParameter(cmd, "@CompletedDateTime", portfolioItem.CompletedDateTime);
                DbUtils.AddParameter(cmd, "@Title", portfolioItem.Title);
                DbUtils.AddParameter(cmd, "@Description", portfolioItem.Description);
                DbUtils.AddParameter(cmd, "@PortfolioId", portfolioItem.PortfolioId);
                DbUtils.AddParameter(cmd, "@StudentId", portfolioItem.StudentId);
                DbUtils.AddParameter(cmd, "@Id", portfolioItem.Id);

                cmd.ExecuteNonQuery();
            }
        }
    }


    public void DeletePortfolioItem(int id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = "DELETE FROM PortfolioItem WHERE Id = @Id";
                DbUtils.AddParameter(cmd, "@Id", id);
                cmd.ExecuteNonQuery();
            }
        }
    }


}
