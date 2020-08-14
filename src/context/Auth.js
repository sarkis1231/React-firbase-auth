import React, {useEffect, useState, createContext} from "react";
import app from "../firbase";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={
                currentUser
            }
        >
            {children}
        </AuthContext.Provider>
    )
};