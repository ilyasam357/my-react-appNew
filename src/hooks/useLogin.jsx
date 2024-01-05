import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.services";

const useLogin = () => {
    const [username, setUsername] = useState("");
    // get username
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    }else{
      window.location.href = "/login";
    }
    
  }, []);

  return username;
};
export default useLogin;