'use client';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; 


function useAuth() {
    const [localUser, setLocalUser] = useState(null);
 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged triggered");
            if (user) {
                setLocalUser(user);
            } else {
                setLocalUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return localUser;
}

export default useAuth;
