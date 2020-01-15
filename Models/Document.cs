namespace Models
{
    using System;
    using System.Collections.Generic;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class Document
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("_rev")]
        public string Rev { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("header")]
        public string Header { get; set; }

        [JsonProperty("tags")]
        public List<string> Tags { get; set; }

        [JsonProperty("dateCreated")]
        public DateTime DateCreated { get; set; }

        [JsonProperty("createdBy")]
        public string CreatedBy { get; set; }

        [JsonProperty("active")]
        public bool? Active { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }

        [JsonProperty("lastModifiedBy")]
        public string LastModifiedBy { get; set; }

        [JsonProperty("dateLastModified")]
        public DateTime? DateLastModified { get; set; }

        [JsonProperty("sharedWith")]
        public List<string> SharedWith { get; set; }

        [JsonProperty("permission")]
        public List<string> Permission { get; set; }

        [JsonProperty("author")]
        public string Author { get; set; }

        [JsonProperty("datePublished")]
        public DateTime? DatePublished { get; set; }

        [JsonProperty("body")]
        public string Body { get; set; }

        [JsonProperty("date")]
        public DateTime? Date { get; set; }

        [JsonProperty("profilePicture")]
        public string ProfilePicture { get; set; }

        [JsonProperty("showProfilePicture")]
        public bool? ShowProfilePicture { get; set; }

        [JsonProperty("_attachments")]
        public Dictionary<string, Attachment> Attachments { get; set; }

        [JsonProperty("price")]
        public double? Price { get; set; }

        public Document(){
            Tags = new List<string>();
            DateCreated = DateTime.Now;
            Active = false;
            DateLastModified = DateTime.Now;
            SharedWith = new List<string>();
            Permission = new List<string>();
            DatePublished = null;
            Date = null;
            ShowProfilePicture = false;
            Price = 0;
        }
    }

    public partial class Attachment
    {
        [JsonProperty("content_type")]
        public string ContentType { get; set; }

        [JsonProperty("revpos")]
        public long Revpos { get; set; }

        [JsonProperty("digest")]
        public string Digest { get; set; }

        [JsonProperty("length")]
        public long Length { get; set; }

        [JsonProperty("stub")]
        public bool Stub { get; set; }
    }

    public partial class TopLevel
    {
        public static TopLevel FromJson(string json) => JsonConvert.DeserializeObject<TopLevel>(json, Models.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this TopLevel self) => JsonConvert.SerializeObject(self, Models.Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
