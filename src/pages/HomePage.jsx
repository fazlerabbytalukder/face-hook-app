import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export default function HomePage() {
    const { auth } = useAuth();
    console.log(auth);
    return (
        <>
            HomePage
            <Link to="/me">profile</Link>
        </>
    );
}