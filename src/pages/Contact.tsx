import React from 'react';
import styles from '../css/Contact.module.css';
import BaseButtonRouter from "../components/Button_router";
import {GitHub} from "@mui/icons-material";
import {IconButton} from "@mui/material";

const Contact:React.FC = () => {
    return (
        <React.Fragment>
            <div className={styles.home_div}>
                <header className={styles.home_header}>
                    <h1>
                        <a className={styles.hader_a} href={'/'}>DisApp</a>
                    </h1>
                    <nav className={styles.hader_nav}>
                        <ul className={styles.hader_ul}>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/'}>Home</a></li>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/about'}>About</a></li>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/contact'}>Contact</a></li>
                        </ul>
                    </nav>
                    <div className={styles.header_button}>
                        <BaseButtonRouter shape={"contained"} sx={{backgroundColor:"#007AB7",textTransform:'none'}} content={"Login"} to={"/login"}/>
                    </div>
                </header>
                <div className={styles.home_main}>
                    <h1>This product is developed by one person.</h1>
                    <div className={styles.main_sentence}>
                        <a>We welcome questions and bug reports regarding this product.</a>
                    </div>
                    <div>
                        <IconButton>
                            <GitHub></GitHub>
                        </IconButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;