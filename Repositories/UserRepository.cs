using PortfolioStax.Model;
using PortfolioStax.Utils;


namespace PortfolioStax.Repositories;
    public class UserRepository : BaseRepository, IUserRepository

{
    public UserRepository(IConfiguration configuration) : base(configuration) { }


   
    public List<User> GetAll()
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                         SELECT Id, IsReviewer, UserName, Password, Email, Guid
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
                        IsReviewer = (bool)DbUtils.GetBool(reader, "IsReviewer"),
                        Guid = Guid.Parse(DbUtils.GetString(reader, "Guid"))
                    });
                }
                reader.Close();

                return users;
            }
        }
    }

    public User GetById(int id)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                          SELECT Id, IsReviewer, UserName, Password, Email, Guid
                          FROM [User]
                          WHERE Id = @Id";

                DbUtils.AddParameter(cmd, "@Id", id);

                var reader = cmd.ExecuteReader();

                User user = null;
                if (reader.Read())
                {
                    user = new User()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        UserName = DbUtils.GetString(reader, "UserName"),
                        Password = DbUtils.GetString(reader, "Password"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsReviewer = (bool)DbUtils.GetBool(reader, "IsReviewer"),
                        Guid = Guid.Parse(DbUtils.GetString(reader, "Guid"))
                    };
                }

                reader.Close();

                return user;
            }
        }
    }



    public User GetByEmail(string email)
    {
        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"
                    SELECT Id, IsReviewer, UserName, Password, Email, Guid
                    FROM [User]
                    WHERE Email = @email";

                DbUtils.AddParameter(cmd, "@email", email);

                User user = null;

                var reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    user = new User()
                    {
                        Id = DbUtils.GetInt(reader, "Id"),
                        UserName = DbUtils.GetString(reader, "UserName"),
                        Password = DbUtils.GetString(reader, "Password"),
                        Email = DbUtils.GetString(reader, "Email"),
                        IsReviewer = (bool)DbUtils.GetBool(reader, "IsReviewer"),
                        Guid = Guid.Parse(DbUtils.GetString(reader, "Guid"))
                       
                    };
                }
                reader.Close();

                return user;
            }
        }
    }


    public void Add(User user)
    {
        // Generate a new GUID for the user
        user.Guid = Guid.NewGuid();

        using (var conn = Connection)
        {
            conn.Open();
            using (var cmd = conn.CreateCommand())
            {
                cmd.CommandText = @"INSERT INTO [User] (IsReviewer, UserName, Password, Email, Guid)
                                OUTPUT INSERTED.ID
                                VALUES (@IsReviewer, @UserName, @Password, @Email, @Guid)";
                DbUtils.AddParameter(cmd, "@IsReviewer", user.IsReviewer);
                DbUtils.AddParameter(cmd, "@UserName", user.UserName);
                DbUtils.AddParameter(cmd, "@Password", user.Password);
                DbUtils.AddParameter(cmd, "@Email", user.Email);
                DbUtils.AddParameter(cmd, "@Guid", user.Guid); // Use the newly generated GUID

                user.Id = (int)cmd.ExecuteScalar();
            }
        }
    }


}
