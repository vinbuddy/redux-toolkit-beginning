import { useDispatch } from "react-redux";
import { changeTheme } from "../../features/theme";

function Theme() {
    const dispatch = useDispatch();

    const handleChangeTheme = (e) => {
        dispatch(changeTheme(e.target.value));
    };

    return (
        <>
            <h3>Theme</h3>
            <select onChange={handleChangeTheme}>
                <option value="#fff">Light</option>
                <option value="#000">Dark</option>
            </select>
        </>
    );
}

export default Theme;
