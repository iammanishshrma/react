import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useAppDispatch } from "store";
import { fetchProducts } from "store/slices/productsSlice";

const HomePage = () => {
  const products = useSelector(
    (state: RootState) => state.productList.products
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("products", products);
  return (
    <section className="homepage">
      <div className="container">
        <div className="products-block">
          {products.length
            ? products.map((product) => (
                <div key={product.id} className="card">
                  <div className="img-wrap">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <h3>{product.title}</h3>
                  <h4>${product.price}</h4>
                  <p>{product.description}</p>
                  <button>Add to cart</button>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
