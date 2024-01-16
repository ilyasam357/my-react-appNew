import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import Button from "../Eelements/Button/indexBtn";
import { useEffect, useState } from "react";
import TableCart from "../Fragments/TableCart";
import ReactDOM from "react-dom";
import { getProducts } from "../../services/products.services";
import { useSelector } from "react-redux";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-slate-200 absolute p-8">{children}</div>
    </div>,
    document.getElementById("popup")
  );
};

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const username = useLogin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  // get procuct
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
      window.location.href = "/login";
    }
  };
  return (
    <>
      <div className="flex justify-between bg-green-600 h-20 px-5 items-center text-white">
        <p>
          <Link to="/profile"> {username}</Link>
        </p>
        <div className="flex gap-5">
          <Button
            customClass="text-white  font-bold rounded-lg  text-sm  text-center"
            onClick={handleButtonClick}
          >
            cart
            <span className=" font-bold"> {totalCart}</span>
          </Button>

          <Button
            customClass="text-white ml-5 bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            children="Logout"
            onClick={handleLogout}
          />
        </div>
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

            <TableCart products={products} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
