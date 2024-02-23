using PortfolioStax.Model;
using PortfolioStax.Utils;


namespace PortfolioStax.Repositories;
    public class UserRepository : BaseRepository, IUserRepository

{
    public UserRepository(IConfiguration configuration) : base(configuration) { }


    //find a way to add the BOOL and the GUID 
    public List<User> GetAll()
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                         SELECT Id, isReviewer, UserName, Password, Email, guid
                        FROM [User]";

                List<User> users = new List<User>();

                var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    users.Add(new User()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        UserName = DbUtils.GetString(reader, "UserName"),
                        Password = DbUtils.GetString(reader, "Password"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsReviewer = (bool)DbUtils.GetBool(reader, "isReviewer"),
                        Guid = Guid.Parse(DbUtils.GetString(reader, "guid"))
                    });
                }
                reader.Close();

                return users;
            }
        }
    }
}
