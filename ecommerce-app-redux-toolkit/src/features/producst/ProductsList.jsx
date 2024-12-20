import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, fetchProducts } from "./productSlice";

const ProductsList = ({onHandleProductEdit}) => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit= (product)=>{
    onHandleProductEdit(product)
  }

  return (
    <div className="container mx-auto">
      {isLoading && <p> Loading......</p>}
      {error && <p> {error}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => {
            return (
              <article key={product.id}>
                <div className="p-10 shadow-lg rounded-lg h-60 hover:shadow-2xl ">
                  <h2 className="text-3xl ">{product.title}</h2>
                  <p>{product.description} </p>
                  <div className="flex justify-between">
                    <p className="font-bold">${product.price} </p>
                    <p>{product.category} </p>
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={() => dispatch(deleteProducts(product.id))}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                    <button
                      onClick={()=>handleEdit(product)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline ml-5"
                    >
                      Edit
                      </button>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
