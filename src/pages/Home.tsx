import React from 'react';
import styles from '../css/Home.module.css';
import BaseButtonRouter from "../components/Button_router";

const Home:React.FC = () => {
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
                    <h1 className={styles.top_sentence}>Make Your Server</h1><br/>
                    <h1 className={styles.top_sentence}>More Convenient With</h1><br/>
                    <h1 className={styles.top_sentence} style={{color:"#007AB7"}}>DisApp</h1>
                    <div className={styles.sub_sentence_div}>
                        <a className={styles.sub_sentence}>DisApp is created to make Discord easier to use. There are<br/>
                            some recommended functions for those who run discord servers<br/>
                            for game.
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;