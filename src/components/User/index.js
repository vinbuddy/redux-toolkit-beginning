import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/user";

function User() {
    const currentUser = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const handleLogin = () => {
        const userInfo = {
            name: "Huynh The Vinh",
            email: "huynhthevinh1608@gmail.com",
        };
        dispatch(login(userInfo));
    };

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <h3>User</h3>

            {currentUser ? (
                <>
                    <span>Name: {currentUser?.name}</span>
                    <span>Email: {currentUser?.email}</span>
                </>
            ) : (
                <span>Please Login 👇</span>
            )}

            <div>
                {currentUser ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <button onClick={handleLogin}>Login</button>
                )}
            </div>
        </>
    );
}

export default User;
