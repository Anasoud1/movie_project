"use client";
import React, { useEffect, useState, useContext} from 'react'
import styles from './button.module.css'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '@/app/firebase';
import UserAuth from '@/app/useContext';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function AddToMylist({id, poster_path, vote_average, title, overview}) {

  const [userExist, setUserExist] = useState(false);
  const {isAutentified} = useContext(UserAuth);
  const router = useRouter()
  const path = usePathname()

  console.log('*********************************************************************')
  console.log('isAuthentified: ', isAutentified)

  useEffect(()=>{
      const fetchData = async () => {
        if (isAutentified){
          const userId = isAutentified.uid;
          const dataRef = doc(db, "users", userId);
          const docSnap = await getDoc(dataRef);
          const myList = docSnap.data().myList;
          if (docSnap.exists() && myList.some(obj => obj.id === id)) {
            setUserExist(true);
          }
        }
      
    };

    fetchData();
  }, [])


  const addToMylist = async () => {
    try {
        const userId = isAutentified.uid;
        const dataRef = doc(db, "users", userId);
        const docSnap = await getDoc(dataRef);
        const myList = docSnap.data().myList;
        
        const existingData = myList || {};
        const obj = {
            id,
            poster_path,
            vote_average,
            title,
            overview
        }
        const newData = [...existingData, obj];
        await updateDoc(dataRef, {
            myList: newData
        })
        setUserExist(true);
    } catch (error) {
        console.error('error in updating ', error)
    }
  }

  const removeFromList = async() =>{
    const dataRef = doc(db, "users", isAutentified.uid);
    const docSnap = await getDoc(dataRef);
    const myList = docSnap.data().myList;
    const newList = myList.filter(el => el.id !== id);
    await updateDoc(dataRef, {
      myList: newList
    })
    setUserExist(false)
  }
  return (
    <>
    {isAutentified && !userExist && <button className={styles.addBtn} onClick={addToMylist}><FontAwesomeIcon className={styles.addIcon} icon={faPlus} />Add to Watchlist</button>}
    {isAutentified && userExist && <button className={styles.addBtn} onClick={removeFromList}><FontAwesomeIcon className={styles.removeIcon} icon={faTrashCan} />Remove from Watchlist</button>}
    {!isAutentified && <button className={styles.addBtn} onClick={()=> {router.push(`/signin?redirect=${path}`)}}> <FontAwesomeIcon className={styles.addIcon} icon={faPlus} />Add to Watchlist</button>}
    </>

  )
}

export default AddToMylist