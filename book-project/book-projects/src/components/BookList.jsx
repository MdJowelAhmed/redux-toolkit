import { useSelector } from "react-redux";

const BookList = () => {
  const { books } = useSelector((state) => state.booksR);

  const handleDelete = (id) => {
    console.log(id);
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
                  <p>price:{book.price} </p>
                  <p>category:{book.category} </p>
                  <p>quality:{book.quality} </p>
                  <div>
                    <button onClick={() => handleDelete(book.id)} 
                        className="btn ">
                      Delete
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
