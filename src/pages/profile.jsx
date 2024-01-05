import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            <p>Hello, {username}</p>
            <Link to="/product">Back</Link>
        </div>
    );
};

export default ProfilePage;