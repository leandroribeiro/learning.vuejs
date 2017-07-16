using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace lesson18_netcore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("api/skills")]
        [HttpGet]
        public IEnumerable<string> Skills()
        {
            return new string[]{ "netcore", "aspnet", "vue", "javascript" };
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
