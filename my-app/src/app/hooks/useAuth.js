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
                // console.log("There is a user:", user);
                // console.log("user.uid:", user.uid);
                setLocalUser(user);
                // if(pathname === "/signin" || pathname === "/signup")
                //     router.push('/');
                ;
            } else {
                // console.log("There is no user");
                // console.log("pathname: ", pathname);
                // router.push('/signin');
                setLocalUser(null);
                // if(pathname === "/todo-app")
                //     router.push('/signin');
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return localUser;
}

export default useAuth;
