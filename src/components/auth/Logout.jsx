import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import logout from '../../assets/icons/logout.svg';

export default function Logout() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();


    const handleLogout = () => {
        setAuth({});
        navigate("/login");
    }
    return (
        <button
            className="icon-btn"
            onClick={handleLogout}
        >
            <img src={logout} alt="Logout" />
        </button>
    );
}