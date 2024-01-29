import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
    function removeLocalStorage() {
        setUserInfo(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(userInfo));
    }, [userInfo]);

    return (
        <UserContext.Provider value={{userInfo, setUserInfo, removeLocalStorage}}>
            {children}
        </UserContext.Provider>
    )
}