import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.services";
import useLogin from "../hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";



const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  // get procuct
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // // get username
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUsername(getUsername(token));
  //   }else{
  //     window.location.href = "/login";
  //   }

  // }, []);

  
  

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5 gap-3">
        <div className=" flex flex-wrap  gap-3 px-2 w-[95%] mx-auto">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body
                  title={product.title}
                  children={product.description}
                />
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        
      </div>
    </>
  );
};

export default ProductPage;
