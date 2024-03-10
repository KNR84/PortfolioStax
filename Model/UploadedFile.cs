namespace PortfolioStax.Model
{
    public class UploadedFile
    {
        public string FileName { get; set; }
        public long Size { get; set; }
        public string ContentType { get; set; }
        public byte[] Data { get; set; }
    }
}

