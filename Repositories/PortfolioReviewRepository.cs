using PortfolioStax.Model;
using PortfolioStax.Utils;

namespace PortfolioStax.Repositories
{
    public class PortfolioReviewRepository : BaseRepository, IPortfolioReviewRepository
    {
        public PortfolioReviewRepository(IConfiguration configuration) : base(configuration) { }

        public List<PortfolioReview> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserId, PortfolioId, IsApproved, ReviewNotes
                        FROM PortfolioReview";

                    var reader = cmd.ExecuteReader();

                    var portfolioReviews = new List<PortfolioReview>();
                    while (reader.Read())
                    {
                        portfolioReviews.Add(new PortfolioReview()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            PortfolioId = reader.GetInt32(reader.GetOrdinal("PortfolioId")),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            ReviewNotes = reader.GetString(reader.GetOrdinal("ReviewNotes"))
                        });
                    }

                    reader.Close();

                    return portfolioReviews;
                }
            }
        }

        public PortfolioReview GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserId, PortfolioId, IsApproved, ReviewNotes
                        FROM PortfolioReview
                        WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    PortfolioReview portfolioReview = null;
                    if (reader.Read())
                    {
                        portfolioReview = new PortfolioReview()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            PortfolioId = reader.GetInt32(reader.GetOrdinal("PortfolioId")),
                            IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                            ReviewNotes = reader.GetString(reader.GetOrdinal("ReviewNotes"))
                        };
                    }

                    reader.Close();

                    return portfolioReview;
                }
            }
        }

        public void Add(PortfolioReview portfolioReview)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO PortfolioReview (UserId, PortfolioId, IsApproved, ReviewNotes)
                        OUTPUT INSERTED.Id
                        VALUES (@UserId, @PortfolioId, @IsApproved, @ReviewNotes)";

                    DbUtils.AddParameter(cmd, "@UserId", portfolioReview.UserId);
                    DbUtils.AddParameter(cmd, "@PortfolioId", portfolioReview.PortfolioId);
                    DbUtils.AddParameter(cmd, "@IsApproved", portfolioReview.IsApproved);
                    DbUtils.AddParameter(cmd, "@ReviewNotes", portfolioReview.ReviewNotes);

                    portfolioReview.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Update(PortfolioReview portfolioReview)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                UPDATE PortfolioReview 
                SET UserId = @UserId, PortfolioId = @PortfolioId, IsApproved = @IsApproved, ReviewNotes = @ReviewNotes
                WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@UserId", portfolioReview.UserId);
                    DbUtils.AddParameter(cmd, "@PortfolioId", portfolioReview.PortfolioId);
                    DbUtils.AddParameter(cmd, "@IsApproved", portfolioReview.IsApproved);
                    DbUtils.AddParameter(cmd, "@ReviewNotes", portfolioReview.ReviewNotes);
                    DbUtils.AddParameter(cmd, "@Id", portfolioReview.Id);

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
                    cmd.CommandText = @"
                DELETE FROM PortfolioReview
                WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }



    }
}
