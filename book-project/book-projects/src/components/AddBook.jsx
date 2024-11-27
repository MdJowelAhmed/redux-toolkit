import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../featured/books/BookSlice";
import { nanoid } from 'nanoid'

const AddBook = () => {
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    category: "",
    quality: "",
  });
  const dispatch=useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Book Added:", {...book, id:nanoid()});
   dispatch(addBook({...book, id:nanoid()}))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* Book Name */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Book Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={book.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter book name"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={book.author}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={book.price}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={book.category}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter category"
              required
            />
          </div>

          {/* Quality */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quality">
              Quality
            </label>
            <input
              type="text"
              id="quality"
              name="quality"
              value={book.quality}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter quality"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
