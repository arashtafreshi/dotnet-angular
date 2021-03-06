using System.Net.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

public static class AppUtilsServices
{



    public static async Task<string> Get(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            //client.DefaultRequestHeaders.Add("Accept", "application/json");
            string encoded = "Basic " + System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes("admin:1CouchdbeBkhod"));
            client.DefaultRequestHeaders.Add("Authorization", encoded);
            var res = client.GetAsync("http://104.192.4.168:5984" + url).Result;
            return await res.Content.ReadAsStringAsync();
        }
    }

    public static async Task<string> Put(string url, Models.Document data)
    {
        using (HttpClient client = new HttpClient())
        {
            //client.DefaultRequestHeaders.Add("Accept", "application/json");
            string encoded = "Basic " + System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes("admin:1CouchdbeBkhod"));
            client.DefaultRequestHeaders.Add("Authorization", encoded);
            var res = client.PutAsJsonAsync("http://104.192.4.168:5984" + url, data).Result;
            return await res.Content.ReadAsStringAsync();
        }
    }

    public static HttpResponseMessage GetAttachment(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Accept", "image/webp,*/*");
            string encoded = "Basic " + System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes("admin:1CouchdbeBkhod"));
            client.DefaultRequestHeaders.Add("Authorization", encoded);
            var res = client.GetAsync("http://104.192.4.168:5984" + url).Result;
            return res;
        }
    }

    // end of class
}