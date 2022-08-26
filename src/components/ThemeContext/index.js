import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

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
