'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '../signin/signin.module.css'
import { setDoc, doc } from 'firebase/firestore';


const SignupComponent = () => {
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

    const handleSignUp = (e) => {
      e.preventDefault()
      let email = e.currentTarget.email.value;
      let password = e.currentTarget.password.value;

      console.log("email: ", email);
      SetLoading(true);
      
      createUserWithEmailAndPassword(auth, email, password)
      .then((async (userCredential) => {
        try {
          const user = userCredential.user
          const docRef = await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            email,
            myList: [] 
          })
          console.log("docRef created: ", docRef)
          console.log("user created: ", user);
          SetLoading(false);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }))
      .catch(error => {
        const errorCode = error.code;
        const errorMsg = error.message;

        console.log(errorCode, errorMsg);
        setErr(true)
        SetLoading(false);
      })
    }

  return !isAutentified ? (
    <div className={styles.container}>
        <form 
        onSubmit={handleSignUp}
        className={styles.containerForm}
        >
            <h1 className={styles.title}>Sign Up</h1>
            <div>
              <label htmlFor="email" className={styles.label}>Email address</label>
              <input className={styles.input} type="email" name="email" placeholder='Email' required />
            </div>
            <div>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input className={styles.input} type="password" name="password" placeholder='Password' required />
            </div>
            <button type='submit' className={styles.btn}>Sign Up</button>
            {err && <p className={styles.error}>Invalid Email</p>}

            <p>You have account? <Link href={`/signin?redirect=${path}`} className={styles.signupLink}>Login</Link></p>

            <p>{loading ? 'Signing up...' : ''}</p>
        </form>

    </div>
  ) : null
}

export default SignupComponent