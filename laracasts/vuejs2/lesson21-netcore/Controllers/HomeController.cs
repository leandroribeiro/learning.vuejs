using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using lesson21_netcore.Filters;
using lesson21_netcore.Models;
using Microsoft.AspNetCore.Mvc;

namespace lesson21_netcore.Controllers
{
    [ValidateModel]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Store([FromBody]ProjectCreateViewModel model)
        {
            //validate

            //save on database
            using (var db = new ProjectContext())
            {
                db.Blogs.Add(new Project { Name = model.Name, Description = model.Description });
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);
            }

            return Json(new { message = "Project Created!" });
            //return this.Ok(new { response = "Project Created!" });
        }

        /* [HttpPost]
        public async Task<IActionResult> Store(string name, string description)
        {
            //validate

            //save on database
            using (var db = new ProjectContext())
            {
                db.Blogs.Add(new Project { Name = name, Description = description });
                var count = db.SaveChanges();
                Console.WriteLine("{0} records saved to database", count);
            }

            return Json(new { response = "Project Created!" });
            //return this.Ok(new { response = "Project Created!" });
        } */
    }
}
