using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.Controllers
{
    public class ApiController : Controller
    {
        private const string _DbName = "testdotnet";
        private const string _username = "admin";
        private const string _Password = "1CouchdbeBkhod";
        private const string _DbUrl = "http://104.192.4.168:5984";


        public ApiController()
        {
            
        }



        [HttpGet]
        public async Task<string> Test()
        {

            return await AppUtilsServices.Get("/jeevehmarket/_all_docs");
        }

        [HttpGet]
        [Route("api/doc/{id?}")]
        public async Task<string> Document(string id)
        {
            if(string.IsNullOrEmpty(id)){
                return await AppUtilsServices.Get("/jeevehmarket/_all_docs");
            }
            return await AppUtilsServices.Get("/jeevehmarket/"+id);
        }




    }
}
