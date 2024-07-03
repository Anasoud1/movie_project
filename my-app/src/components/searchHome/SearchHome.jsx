"use client";
import { useRef } from 'react';
import styles from './search.module.css'
import { useRouter } from 'next/navigation';

function SearchHome() {
    const inputRef = useRef(null);
    const router = useRouter();

    function handleSearch(){
        const searchTerm = inputRef.current.value;
        if (searchTerm.length > 0) {
            const url = '/search/' + searchTerm
            router.push(url)
        }
        
    }
    function handleEnter(event){
        if (event.key === "Enter"){
            handleSearch()
        }
    }

  return (
    <div className={styles.searchBar}>
        <input className={styles.search} placeholder='Search' ref={inputRef} onKeyDown={handleEnter}/>
        <button className={styles.searchBtn} onClick={handleSearch}>search</button>

    </div>
  )
}

export default SearchHome