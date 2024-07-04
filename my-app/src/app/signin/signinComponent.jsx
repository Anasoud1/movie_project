'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuth from '../hooks/useAuth';
import styles from './signin.module.css'


const SigninComponent = () => {
  const [loading, SetLoading] = useState(false);
  const [err, setErr] = useState(false)
  const isAutentified = useAuth();
  
  const router = useRouter();
  const search = useSearchParams()
  const path = search.get('redirect') || '/'
  useEffect(()=> {
    if(isAutentified){
        router.push(path)
    }
  }, [isAutentified, router, path]) 

  const handleSignIn = (e) => {
    e.preventDefault();
    let email = e.currentTarget.email.value;
    let password = e.currentTarget.password.value;

    SetLoading(true);
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential => {
      
      console.log("user to sign in", userCredential);
      SetLoading(false);
    }))
    .catch(error => {
      setErr(true)
      SetLoading(false);
    })
  }

return !isAutentified ? (
  <div className={styles.container}>
    <form 
    onSubmit={handleSignIn}
    className={styles.containerForm}
    >
      <h1 className={styles.title}>Sign In</h1>
      <div>
        <label htmlFor="email" className={styles.label}>Email address</label>
        <input className={styles.input} type="email" name="email" placeholder='Email' required />
      </div>
      <div>
      <label htmlFor="password" className={styles.label}>Password</label>
        <input className={styles.input} type="password" name="password" placeholder='Password' required />

      </div>
      <button type='submit' className={styles.btn}>Login</button>
      {err && <p className={styles.error}>Email or password incorrect</p>}
      <p>Don't have account? <Link href={`/signup?redirect=${path}`} className={styles.signupLink}>Sign up</Link></p>
      <p>{loading ? 'Signing in...' : ''}</p>
    </form>
  </div>
) : null
}

export default SigninComponent