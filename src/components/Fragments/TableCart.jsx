import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  return (
    <div>
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
          {products.length > 0 &&
            cart.map((item) => {
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
  );
};

export default TableCart;
