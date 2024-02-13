using AutoMapper;
using Domain;

namespace Application;

public class MappingPatterns : Profile
{
    public MappingPatterns()
    {
        CreateMap<Activity, Activity>();
    }
}
