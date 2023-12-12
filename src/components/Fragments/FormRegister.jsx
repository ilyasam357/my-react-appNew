import Button from "../Eelements/Button/indexBtn";
import InputForm from "../Eelements/input";

const FormRegister = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    // Simpan email dan password ke dalam localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  
    // Tampilkan pesan sukses setelah registrasi berhasil
    alert("Registrasi berhasil!");
  
    // Redirect ke halaman login
    window.location.href = "/login";
  };
  return (
    <>
      <form onSubmit={handleRegister}>
        <InputForm
          label="Full Name"
          type="text"
          name="fullname"
          placeholder="John Doe"
        />
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="contoh@gmail.com"
        />
        <InputForm
          label="Password"
          type="password"
          name="password"
          placeholder="********"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="********"
        />
        <Button customClass="bg-green-600 w-full" type="submit">Register</Button>
      </form>
    </>
  );
};
export default FormRegister;
