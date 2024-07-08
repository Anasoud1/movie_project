"use client"
import React, { useContext } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import LogOutButton from '../button/Button';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'
import UserAuth from '@/app/hooks/useContext';


function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/';
  const signPage = ['/signin', '/signup'].includes(pathname);
  const {isAutentified} = useContext(UserAuth);


  function hideMenu(){
    const element = document.getElementById('navbar');

    element.classList.remove(styles.navBar2)
    element.classList.add(styles.navBar)
  }
  function showMenu(){
    const element = document.getElementById('navbar');

    element.classList.remove(styles.navBar)
    element.classList.add(styles.navBar2)

  }

  return (
    <>
    {!signPage && <nav className={styles.container}>
      <Link href="/" className={`${styles.logo}`}>YouMovie</Link>
      
      <div className={styles.navContainer}>
        {!isHomePage && <Search />}
        <ul id={'navbar'} className={styles.navBar} >
          <FontAwesomeIcon className={styles.arrowIcon} icon={faCircleArrowRight} 
          onClick={hideMenu}/>
          <Link href="/upcoming">Upcoming</Link>
          <Link href="/topRated">Top Rated</Link>
          <Link href="/popular">Popular</Link>
          {isAutentified && <Link href="/mylist">Watchlist</Link>}
          <LogOutButton/>
        </ul>
        
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} onClick={showMenu} />
      </div>
      
      
    </nav>}
    </>
    
  )
}

export default Header