using Book_store.Models;
using Microsoft.EntityFrameworkCore;

namespace Book_store.Data
{
    public class BookStoreContext : DbContext
    {
        public BookStoreContext(DbContextOptions<BookStoreContext> opt): base(opt)
        {

        }
        public DbSet<Book>? Books { get; set; }
    }
}
