import Button from "../Eelements/Button/indexBtn";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="w-full max-w-[300px] bg-slate-300 p-5 rounded-lg shadow-lg flex flex-col justify-between">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <a href="#">
        <img className="w-full h-72 object-cover rounded-t-lg" src={image} alt="product image"  />
      </a>
    </>
  );
};
const Body = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="px-5 pb-5 h-full mt-1">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {title.substring(0, 20)}
          </h5>
          <p className="text-gray-700">{children.substring(0, 70)}</p>
        </a>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  return (
    <>
      <div className="flex items-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-gray-900">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <Button
          customClass="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          children="Add to cart"
          onClick={() => addToCart(id)}
        />
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
