using FluentValidation;

namespace lesson20_netcore.Models
{
    public class ProjectCreateViewModelValidator : AbstractValidator<ProjectCreateViewModel>
    {
        public ProjectCreateViewModelValidator()
        {
            RuleFor(x=> x.Name).NotEmpty();
            RuleFor(x=>x.Description).NotEmpty();
        }
    }
}