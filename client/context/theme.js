import { useEffect, createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        }
    }, []);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};
