import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        setIsLoading(true);
        if (userId) {
            fetch(`https://server-womenday.glitch.me/data/${userId}`)
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch(() => alert('Xử lý không thành công'))
                .finally(() => setIsLoading(false));
        }
    }, [userId]);

    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export { DataProvider, DataContext };
