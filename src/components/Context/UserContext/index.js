import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState([]);
    const url = 'https://server-womenday.glitch.me/users';

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                url,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext };
