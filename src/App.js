import { useSelector } from "react-redux";
import "./App.css";
import Theme from "./components/Theme";
import User from "./components/User";

function App() {
    const theme = useSelector((state) => state.theme.themeColor);

    return (
        <div className="App">
            <header>
                <h1>Redux Toolkit</h1>
            </header>
            <div className="sections">
                <section style={{ background: theme }}>
                    <Theme />
                </section>
                <section>
                    <User />
                </section>
            </div>
        </div>
    );
}

export default App;
