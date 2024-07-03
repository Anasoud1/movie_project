"use client";
import { useRef, useState } from 'react';
import styles from './header.module.css'
import { useRouter } from 'next/navigation';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
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
        <button className={styles.searchBtn} onClick={handleSearch}>
            <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass}/>
        </button>

    </div>
  )
}

export default Search