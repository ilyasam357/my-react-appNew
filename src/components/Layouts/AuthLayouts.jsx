import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <>
      <div className=" flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-green-600">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Welcome, please enter your detail
          </p>
          {children}
          <p className="text-sm mt-3 text-center">
            {type === "login" ? "Don't have an account?" : "Already have an account?"}
           
            <Link
              to={type === "login" ? "/register" : "/login"}
              className="text-green-600 ml-1 font-bold"
            >
              {type === "login" ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default AuthLayout;
