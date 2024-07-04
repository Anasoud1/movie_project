import React from 'react'
import styles from './pagination.module.css'

function MylistPagination({totalPosts, postPerPage, currentPage, setCurrentPage}) {
  let pages = []

  for(let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++){
    pages.push(i)
  }
  

  return (
    <>
    {pages.length > 1 && <div className={styles.pagination}>
    {
        pages.map(page => (
            <button key={page} className={`${styles.btn} ${currentPage === page ? styles.active : null}`} onClick={() =>{setCurrentPage(page)}}>{page}</button>
        ))
    }
    </div>}
    </>
    
  )
}

export default MylistPagination