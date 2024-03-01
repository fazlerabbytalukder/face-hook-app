import { useEffect } from "react";
import { useAuth } from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { useProfile } from "../Hooks/useProfile";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";

export default function ProfilePage() {
    const { state, dispatch } = useProfile();

    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING });
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id
                    }`);
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.error(error);
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: error.message,
                });
            }
        }

        fetchProfile();
    }, []);

    if (state?.loading) {
        return <div> Fetching your Profile data...</div>
    }
    return (
        <>
            <ProfileInfo />
            <MyPosts />
        </>
    );
}