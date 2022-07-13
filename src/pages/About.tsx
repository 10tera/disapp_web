import React from 'react';
import styles from '../css/About.module.css';
import BaseButtonRouter from "../components/Button_router";

const About:React.FC = () => {
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
                    <h1>What is DisApp?</h1>
                    <div className={styles.main_sentence}>
                        <a>This service is created to make Discord easier to use.<br/>
                            There are some recommended functions for those who run discord servers for game.<br/>
                        </a>
                    </div>
                    <div className={styles.main_sentence_function}>
                        <h1>What can I do?</h1>
                        <ul>
                            <li>Automatic VC creation</li>
                            <li>Change settings by commands and this site</li>
                            <li>Distribution of the number of people for event or custom gamen</li>
                            <li>Lottery function using discord rolls</li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;