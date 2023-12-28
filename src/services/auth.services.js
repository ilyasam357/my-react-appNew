import axios from "axios";
import { jwtDecode } from "jwt-decode";
export const Login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
        callback(true , res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUsername = (token) =>{
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.user
}