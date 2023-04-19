using Book_store.Models;

namespace Book_store.Repository
{
    public interface IBookRepository
    {
        public Task<List<BookModel>> GetAllBookAsync();
        public Task<BookModel> GetBookAsync(int id);
        public Task<int> AddBookAsync(BookModel model);
        public Task DeleteBookAsync(int id);
        public Task UpdateBookAsync(int id,BookModel model);
    }
}
