import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

const ProductsList = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      {isLoading && <p> Loading......</p>}
      {error && <p> {error}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => {
            return (
              <article key={product.id}>
                <div className="p-10 shadow-lg rounded-lg h-48">
                  <h2>{product.title}</h2>
                  <p>{product.description} </p>
                  <p>{product.price} </p>
                  <p>{product.category} </p>
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
