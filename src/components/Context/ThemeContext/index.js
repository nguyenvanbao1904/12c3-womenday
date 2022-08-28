import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemProvider({ children }) {
    const defaultTheme = JSON.parse(localStorage.getItem('darkMode'));

    const [darkMode, setDarkMode] = useState(defaultTheme);

    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    return (
        <ThemeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemProvider, ThemeContext };
