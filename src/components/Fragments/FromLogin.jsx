import { useEffect, useRef } from "react";
import Button from "../Eelements/Button/indexBtn";
import InputForm from "../Eelements/input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Mengambil nilai email dan password dari localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Memeriksa apakah email dan password yang dimasukkan sesuai dengan yang ada di localStorage
    if (email === storedEmail && password === storedPassword) {
      // Jika sesuai, arahkan pengguna ke halaman produk
      window.location.href = "/product";
    } else {
      // Jika tidak sesuai, tampilkan pesan error
      alert("Email atau password salah");
    }
  };
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="contoh@gmail.com"
          ref={emailRef}
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
      </form>
    </>
  );
};
export default FormLogin;
