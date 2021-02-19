
import React, { useState } from 'react'
import image from './logo.svg';
import styles from './nav.module.css'

function NavBar() {
    const MenuItem = [
        {
            title: "Home",
            url: "http://www.google.com"
        },
        {
            title: "Service",
            url: "http://www.facebook.com"
        },
        {
            title: "Product",
            url: "http://www.Linkdin.com"
        },
        {
            title: "About",
            url: "http://www.about.com"
        },
    ]
    const [isClicked, setisClicked] = useState(false);
    const onHandelClick = () => {
        setisClicked(!isClicked);
    }
    return (
        <div >
            <header className={isClicked ? styles.header1 : styles.header}>
                <nav className={isClicked ? styles.nav1 : styles.nav}>
                    <div className={isClicked ? styles.logo1 : styles.logo}>
                        <img src={image} alt='logo' />
                    </div>
                    <div>
                        <ul className={isClicked ? styles.listRow : styles.list} >
                            {
                                MenuItem.map((item, index) => {
                                    return (
                                        <a href={item.url} className={styles.a}>
                                            <li key={index} className={isClicked ? styles.li1 : styles.li}>
                                                {item.title}
                                            </li>
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div onClick={onHandelClick} className={styles.menu}>
                        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}>

                        </i>

                    </div>
                    <div></div>
                </nav>
            </header>
        </div>
    );
}
export default NavBar;
