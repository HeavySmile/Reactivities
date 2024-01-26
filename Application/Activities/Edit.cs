using Domain;
using MediatR;
using Persistence;

namespace Application;

public class Edit
{
    public class Command : IRequest
    {
        public Activity Activity { get; set; }
    }
    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _context;
        
        public Handler(DataContext context)
        {
            _context = context;
        }

        // Maybe add automapper
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await _context.Activities.FindAsync(request.Activity.Id);

            activity.Title = request.Activity.Title ?? activity.Title;
            activity.Description = request.Activity.Description ?? activity.Description;
            activity.Category = request.Activity.Category ?? activity.Category;
            activity.Date = request.Activity.Date;
            activity.City = request.Activity.City ?? activity.City;
            activity.Location = request.Activity.Location ?? activity.Location;

            await _context.SaveChangesAsync();
        }
    }
}
