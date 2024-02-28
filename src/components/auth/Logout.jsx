import { useNavigate } from "react-router-dom";
import logout from '../../assets/icons/logout.svg';

export default function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
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