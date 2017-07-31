using System.ComponentModel.DataAnnotations;

namespace lesson19_netcore.Models
{
    public class Project
    {
        public int ProjectID { get; set; }
        
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
    }
}