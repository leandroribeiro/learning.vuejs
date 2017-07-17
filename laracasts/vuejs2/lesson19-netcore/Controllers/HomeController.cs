using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using lesson19_netcore.Models;
using Microsoft.AspNetCore.Mvc;

namespace lesson19_netcore.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(string name, string description)
        {
            //validate

            //save on database

            return Json(new { response = "Project Created!" });
            //return this.Ok(new { response = "Project Created!" });
        }
    }
}
