import Head from "next/head";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import styles from "../../styles/Patient.module.css"
import Sidebar from "../../components/Sidebar";
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

const Patient = () => {
    const [user, setUser]= useState(true)
    const [name, setName]= useState("What's happening baby")
    const [contentWidth, setContentWidth]= useState();
    const [controlWidth, setControlWidth]= useState()
    
    return (
        <>
            <Head>
                <title>Health App | Patient Homepage</title>
            </Head>
            <div className={styles.home_page}>
                <div style={controlWidth} className={styles.control}>
                    
                </div>
                <Sidebar setControlWidth={setControlWidth} setContentWidth={setContentWidth} />
                <div style={contentWidth} className={styles.content} >
                    <div className={styles.top}>
                        <h1 className={styles.name} >Good Evening Jane</h1>
                        <div className={styles.date} > <i>12th April</i> </div>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.home_item}>
                            <div><PersonIcon className={styles.home_icon} /></div>
                            <h3>View Profile</h3>
                        </div>
                        <div className={styles.home_main}> 
                            <div><AddIcon className={styles.home_icon}/></div>
                            <h3>Book Appointment</h3>
                         </div>
                        <div className={styles.home_item}>
                            <div><WorkHistoryOutlinedIcon className={styles.home_icon} /></div>
                            <h3>View History</h3>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, repellendus! Rem qui voluptas dolorum iure iste harum, blanditiis molestiae, voluptates soluta tenetur incidunt, necessitatibus ullam libero. Quaerat maiores cupiditate cumque?</i> </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Patient;