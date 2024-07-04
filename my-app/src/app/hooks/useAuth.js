'use client';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; 
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function useAuth() {
    const [localUser, setLocalUser] = useState(null);
    const pathname = usePathname()
    const router = useRouter()

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
