import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../featured/books/BookSlice";

const BookList = ({ onHandleEdit }) => {
  const { books } = useSelector((state) => state.booksR);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  const handleEdit = (book) => {
    onHandleEdit(book);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl"> Book List</h2>
      <div className="">
        {books && books.length > 0 ? (
          <ul className=" grid grid-cols-1 lg:grid-cols-3 gap-10">
            {books.map((book) => {
              return (
                <li key={book.id} className="shadow-xl text-center p-5">
                  <h2>Name: {book.name} </h2>
                  <h3>author: {book.author} </h3>
                  <p>price: {book.price} </p>
                  <p>category: {book.category} </p>
                  <p>quality: {book.quality} </p>
                  <div>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(book)}
                      className="btn ml-5"
                    >
                      Edit
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No book available</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
