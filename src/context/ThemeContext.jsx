import React, { useState, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [darkMode,  setDarkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#90caf9' : '#1976d2',
            },
            background: {
                default: darkMode ? '#121212' : '#C4C5C5',
                paper: darkMode ? '#1d1d1d' : '#C4C5C5',
            },
        },
    });

    const toggleTheme = () => {
        setDarkMode(darkMode => !darkMode);
    }

    return (
        <ThemeContext.Provider value={ toggleTheme }>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;