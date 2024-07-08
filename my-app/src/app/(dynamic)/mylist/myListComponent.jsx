'use client';
import { db } from '@/app/firebase';
import UserAuth from '@/app/hooks/useContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react'
import styles from '@/app/(dynamic)/page.module.css'
import st from './myList.module.css'
import Link from 'next/link';
import Image from 'next/image';
import MylistPagination from '@/components/pagination/mylistPagination';

function shortOverview(overview){
  const arraySplit = overview.split(" ");

  let newArray = ""
  if (arraySplit.length > 60){
    newArray = arraySplit.slice(0, 60)
      overview = newArray.join(" ") + " ..."
  }
  return overview;
}

function MylistComponent() {
  
  const [data, setData] = useState([])
  const {isAutentified} = useContext(UserAuth);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0)

  
  const postPerPage = 20;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;


  useEffect(()=>{
    const fetchData = async () => {
      if (isAutentified) {
        const userId = isAutentified.uid;
        const dataRef = doc(db, "users", userId);
        const docSnap = await getDoc(dataRef);
        const myList = docSnap.data().myList;
        setTotalPosts(myList.length)
        setData(myList.slice(firstIndex, lastIndex));
      }
  };
  fetchData();
}, [currentPage, isAutentified])

  const removeFromList = async(event, id) =>{
    event.preventDefault();
    const dataRef = doc(db, "users", isAutentified.uid);
    const docSnap = await getDoc(dataRef);
    const myList = docSnap.data().myList;
    const newList = myList.filter(el => el.id !== id);
    await updateDoc(dataRef, {
      myList: newList
    });
    setData(newList.slice(firstIndex, lastIndex))
  }

  return (
    <div>
        <div className={styles.container}>
            {
            data.map(movie => (
            <Link href={"/player/" + movie.id} className={styles.post} key={movie.id}>
            
                <Image src='/img/minus-button.png' 
                className={styles.removeImg} 
                width={40} height={40} alt='remove from myList'
                onClick={(event) => removeFromList(event, movie.id)}/>
                <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    fill={true}
                    alt="post image"
                />
                {movie.vote_average !== 0.0 && <div className={styles.review}>{movie.vote_average}</div>}
                </div>
                
                <div className={styles.content}>
                <h1 className={styles.title}>{movie.title}</h1>
                
                    {movie.overview && <p  className={styles.text}>{shortOverview(movie.overview)}</p>}
        
                </div>
            
            </Link>
            ))
            }
        </div>
        <MylistPagination postPerPage={postPerPage} totalPosts={totalPosts}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default MylistComponent