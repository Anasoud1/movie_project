"use client";
import React from 'react'
import styles from './button.module.css'
import { signOut } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { usePathname, useRouter } from 'next/navigation'
import useAuth from '@/app/hooks/useAuth';


function LogOutButton() {

  const isAutentified = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  
  const handleSignout = async () => {
    await signOut(auth);
    router.push(pathname === '/mylist' ? '/' : pathname)
  }

  return (
    <>
    {isAutentified && <button className={styles.btn} onClick={handleSignout}>Log Out</button>}
    {!isAutentified && <button className={styles.btn} onClick={() => {router.push(`/signin?redirect=${pathname}`)}}>Sign In</button>}

    </>

  )
}

export default LogOutButton