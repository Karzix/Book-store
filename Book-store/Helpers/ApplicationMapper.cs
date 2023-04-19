using AutoMapper;
using Book_store.Models;

namespace Book_store.Helpers
{
    public class ApplicationMapper:Profile
    {
        public ApplicationMapper()
        {
            CreateMap<Book,BookModel>().ReverseMap();
        }
    }
}
