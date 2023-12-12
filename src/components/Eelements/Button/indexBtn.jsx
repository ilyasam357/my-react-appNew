const Button = (props) => {
    const { children = "...", customClass = "bg-green-800" , onClick = () => {}, type = "button"} = props;
    return (
      <>
        <button className={`${customClass}  text-white font-bold py-2 px-4 rounded`}
            onClick={onClick}
            type={type}
        >
          {children}
        </button>
      </>
    );
  };  

  export default Button