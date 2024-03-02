using PortfolioStax.Model;
using PortfolioStax.Utils;


namespace PortfolioStax.Repositories
{
    public class StudentRepository : BaseRepository, IStudentRepository
    {
        public StudentRepository(IConfiguration configuration) : base(configuration) { }

        public List<Student> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                SELECT Id, ParentId, FirstName, LastName, GradeLevel
                FROM Student";

                    var reader = cmd.ExecuteReader();

                    var students = new List<Student>();
                    while (reader.Read())
                    {
                        students.Add(new Student()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            ParentId = DbUtils.GetInt(reader, "ParentId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            GradeLevel = DbUtils.GetInt(reader, "GradeLevel"),

                        });
                    }

                    reader.Close();

                    return students;
                }
            }
        }

        public Student GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                   SELECT Id, ParentId, FirstName, LastName, GradeLevel
                   FROM Student
                   WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Student student = null;
                    if (reader.Read())
                    {
                        student = new Student()
                        {
                            Id = id,
                            ParentId = DbUtils.GetInt(reader, "ParentId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            GradeLevel = DbUtils.GetInt(reader, "GradeLevel"),

                        };
                    }

                    reader.Close();

                    return student;
                }
            }
        }

        public void Add(Student student)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                INSERT INTO Student (ParentId, FirstName, LastName, GradeLevel)
                OUTPUT INSERTED.ID
                VALUES (@ParentId, @FirstName, @LastName, @GradeLevel)";

                    DbUtils.AddParameter(cmd, "@ParentId", student.ParentId);
                    DbUtils.AddParameter(cmd, "@FirstName", student.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", student.LastName);
                    DbUtils.AddParameter(cmd, "@GradeLevel", student.GradeLevel);

                    student.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public void Update(Student student)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE Student
                   SET FirstName = @FirstName,
                       LastName = @LastName,
                       GradeLevel = @GradeLevel
                   WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@FirstName", student.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", student.LastName);
                    DbUtils.AddParameter(cmd, "@GradeLevel", student.GradeLevel);
                    DbUtils.AddParameter(cmd, "@Id", student.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }




        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Student WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

    }
}
