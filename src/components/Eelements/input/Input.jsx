import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { placeholder = "...", type = "text", name } = props;
  return (
    <>
      <input
        type={type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-600 focus:shadow-outline placeholder:opacity-50"
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </>
  );
});
export default Input;
