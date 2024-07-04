'use client'
import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
import { usePathname } from 'next/navigation';

function Footer() {
  const pathname = usePathname()
  const signPage = ['/signin', '/signup'].includes(pathname);

  return (
    <>
    {!signPage && <div className={styles.footer}>
      <p>&copy;2024 All rights reserved</p>
      <div>
        <a target="_blank" href='https://github.com/Anasoud1/'>
          <Image className={styles.icon} src="/img/github.png" width={20} height={20} alt="github"/>
        </a>
        
        <a target="_blank" href='https://www.linkedin.com/in/anas-oudsassi/'>
          <Image className={styles.icon} src="/img/linkedin.png" width={20} height={20} alt="linkedin"/>
        </a>

      </div>
      
      
    </div>}
    </>
    
  )
}

export default Footer