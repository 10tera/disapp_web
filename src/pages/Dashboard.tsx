import * as React from 'react';
import Drawer_dashboard from "../components/Drawer_dashboard";
import styles from "../css/Dashboard_Home.module.css"
import Button_router from "../components/Button_router";



const Dashboard = () => {
    return (
        <React.Fragment>
            <div>
                <Drawer_dashboard>
                    <div>
                        <h1>Welcome test</h1>
                        <div className={styles.main_sentence}>
                            <a>Here is where you can configure DisApp settings.</a>
                        </div>
                        <div className={styles.main_sentence}>
                            <Button_router shape={"contained"} content={"Go to Main Home"}
                                           to={"/"}/>
                        </div>
                    </div>
                </Drawer_dashboard>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;