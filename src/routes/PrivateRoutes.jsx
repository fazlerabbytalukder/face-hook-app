import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import Header from "../components/common/Header";
import PostProvider from "../providers/PostProvider";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoute() {
    const { auth } = useAuth();
    return (
        <>
            {
                auth.user ? (
                    <>
                        <PostProvider>
                            <ProfileProvider>
                                <Header />
                                <main className="mx-auto max-w-[1020px] py-8">
                                    <div className="container">
                                        <Outlet />
                                    </div>
                                </main>
                            </ProfileProvider>
                        </PostProvider>
                    </>
                ) : (
                    <Navigate to="/login" />
                )
            }
        </>
    );
}