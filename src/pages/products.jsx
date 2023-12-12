import { useEffect, useRef, useState } from "react";
import Button from "../components/Eelements/Button/indexBtn";
import CardProduct from "../components/Fragments/CardProduct";
import ReactDOM from "react-dom";
import Counter from "../components/Fragments/Counter";
import { json } from "react-router-dom";
import { getProducts } from "../services/products.services";


const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-200 absolute p-8">{children}</div>
    </div>,
    document.getElementById("popup")
  );
};

const email = localStorage.getItem("email");
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0)
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getProducts((data)=>{
      setProducts(data)
    })
  },[])

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("cart"))|| [])
  },[])

  useEffect(()=>{
    if(products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      },0);
      setTotalPrice(sum)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
    
  },[cart, products])
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleLogout = () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      window.location.href = "/login";
    }
  };

  // useref
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart"))|| []);

  // const handleAddToCartRef = (id)=>{
  //   cartRef.current = [...cartRef.current, {id, qty:1}]
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current))
  // }
 

  return (
    <>
      <div className="flex justify-between bg-green-600 h-20 px-5 items-center text-white">
        {email}
        <div className="flex gap-5">
          <Button
            customClass="text-white  font-medium rounded-lg text-sm  text-center"
            children="Cart"
            onClick={handleButtonClick}
          />
          <Button
            customClass="text-white ml-5 bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            children="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
      <div className="flex justify-center py-5 gap-3">
        <div className=" flex flex-wrap  gap-3 px-2">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body
                title={product.title}
                children={product.description}
              />
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        {isModalOpen && (
          <Modal>
            {/* Modal content */}
            <div className="">
              <Button
                customClass="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-full text-sm  text-center"
                children="X"
                onClick={() => setIsModalOpen(false)}
              />
              <h1 className="text-2xl font-bold text-green-500 ml-5 mb-2">
                Keranjang
              </h1>
              <table className="text-left table-auto border-separate border-spacing-x-5">
                <thead>
                  <tr>
                    <th className="text-left">Product</th>
                    <th className="">Price</th>
                    <th className="">Quantity</th>
                    <th className="">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 && cart.map((item) => {
                    const product = products.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <tr key={item.id}>
                        <td className=" ">{product.title.substring(0, 10)}...</td>
                        <td>
                          {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                        <td>{item.qty}</td>
                        <td>
                          {(item.qty * product.price).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan={3}>
                      <b>Total Price</b>
                    </td>
                    <td>
                      <b>
                        {totalPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ProductPage;
