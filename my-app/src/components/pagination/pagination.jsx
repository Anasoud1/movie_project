import React from 'react'
import styles from './pagination.module.css'


function Pagination({currentPage, setCurrentPage}) {
    let pages = []

    for (let i = 1; i <= 10; i++){
        pages.push(i);
    }
  return (
    <div className={styles.pagination}>
        {
            pages.map(page => (
                <button key={page} className={`${styles.btn} ${page === currentPage? styles.active: ''}`} onClick={()=>{setCurrentPage(page)}}>{page}</button>
            ))
        }
    </div>
  )
}

export default Pagination