import React from 'react'
import Link from 'next/link'
import Styles from './../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <header>
        <nav className="nav">
            <div className={Styles.container + " container"}>
            <div >
                <img className={Styles.logo} src="/logo_ecommerce.png"/> <span  className={Styles.logo_text}>E-Commerce</span>
            </div>

            <div>
                <ul>
                    <li>
                        <Link href="/">
                             <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                             <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                              <a>Cart</a>
                        </Link>
                    </li>
                </ul>
            </div> 
        </div>
        </nav>
       
    </header>
  )
}

export default NavBar
