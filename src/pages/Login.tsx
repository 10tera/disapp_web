import React from 'react';
import BaseButton from "../components/Button";
import BaseButtonRouter from "../components/Button_router";
import styles from "../css/Login.module.css";

const Login:React.FC = () => {
    return (
        <React.Fragment>
            <div className={styles.login_div}>
                <header className={styles.login_header}>
                    <h1>
                        <a className={styles.login_a} href={'/'}>DisApp</a>
                    </h1>
                    <nav className={styles.hader_nav}>
                        <ul className={styles.hader_ul}>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/'}>Home</a></li>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/about'}>About</a></li>
                            <li className={styles.hader_li}><a className={styles.hader_a} href={'/contact'}>Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <div className={styles.login_main}>
                    <div className={styles.login_form}>
                        <h1>Get Started</h1>
                        <div className={styles.login_form_margin}>
                            <a>Login by using your Discord account. Please click button,</a>
                        </div>
                        <div className={styles.login_form_margin}>
                            <BaseButtonRouter to={"/dashboard/000000/home"} shape={"contained"} sx={{backgroundColor:"#007AB7",width:200,textTransform:'none'}} content={"Login"}/>
                        </div>
                        <div className={styles.login_form_margin}>
                            <a className={styles.login_form_careful}>I agree to Terms of Service and Privacy Policy.</a>
                        </div>
                        <a className={styles.login_form_careful}>※What you see is the test user's screen.</a>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;