import { useEffect, useRef, useState } from "react";
import Button from "../Eelements/Button/indexBtn";
import InputForm from "../Eelements/input";
import { Login } from "../../services/auth.services";

const FormLogin = () => {
  const [loginGagal , setLoginGagal] = useState("")
  const handleLogin = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;
    // const password = event.target.password.value;

    // // Mengambil nilai email dan password dari localStorage
    // const storedEmail = localStorage.getItem("email");
    // const storedPassword = localStorage.getItem("password");

    // // Memeriksa apakah email dan password yang dimasukkan sesuai dengan yang ada di localStorage
    // if (email === storedEmail && password === storedPassword) {
    //   // Jika sesuai, arahkan pengguna ke halaman produk
    //   window.location.href = "/product";
    // } else {
    //   // Jika tidak sesuai, tampilkan pesan error
    //   alert("Email atau password salah");
    // }
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    Login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginGagal(res.response.data);
      }
    });
  };
  const userNameRef = useRef(null);
  useEffect(() => {
    userNameRef.current.focus();
  }, []);
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Username"
          type="text"
          name="username"
          ref={userNameRef}
          placeholder="jhon doe"
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="********"
        />
        <Button customClass="bg-green-600 w-full" type="submit">
          Login
        </Button>
        {loginGagal && <p className="text-red-500 text-center mt-1">{loginGagal}</p>}
      </form>
    </>
  );
};
export default FormLogin;
