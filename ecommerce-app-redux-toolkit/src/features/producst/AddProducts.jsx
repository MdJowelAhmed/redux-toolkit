import React, { useState } from "react";

const AddProducts = () => {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (
      !product.id ||
      !product.title ||
      !product.description ||
      !product.price ||
      !product.category
    ) {
      alert("Please fill all fields!");
      return;
    }

    // Log the product data
    console.log("New Product:", product);

    // Reset the form after submission
    setProduct({ id: "", title: "", description: "", price: "", category: "" });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-2 gap-4">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter product title"
            />
          </div>
          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter product price"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter product description"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-medium mb-1">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-5"
              placeholder="Enter product category"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
