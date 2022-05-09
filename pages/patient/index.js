import Head from "next/head";
import { auth } from "../../lib/firebase";
import { useState } from "react";
import styles from "../../styles/Patient.module.css"
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Patient = () => {
    const [user, setUser]= useState(true)
    const [toggle, setToggle]= useState(true)
    const [name, setName]= useState("What's happening baby")
    const [panel, setPanel]= useState({width: "17vw"})
    const [btnWidth, setBtnWidth]= useState({width: "80%"})
    // Authenticate user
    const current =auth.currentUser;

    // toggle styles
    const handleClick= ()=>{
        toggle ? setToggle(false) : setToggle(true) 
        toggle ? setPanel({width: "10vw"}) : setPanel({width: "17vw"})
        toggle ? setBtnWidth({width: "fit-content"}) : setBtnWidth({width: "80%"})
    }
 

    return (
        <>
            <Head>
                <title>Health App | Patient Homepage</title>
            </Head>
            <div className={styles.home_page}>
                <nav style={panel} className={styles.navigation_panel}>
                    <div style={btnWidth} className={styles.panel_head} >
                        <div onClick={()=> handleClick()}  className={styles.check} >
                            <MenuIcon className={styles.menu_icon} />
                        </div>
                        {toggle && <h2 className={styles.panel_name} > Health </h2>}
                    </div>
                    <div style={btnWidth} className={styles.nav_btn}> <AddIcon className={styles.icon} /> {toggle && <p>Book</p>} </div>
                    <div style={btnWidth} className={styles.nav_btn}> <PersonIcon className={styles.icon} /> {toggle && <p>Profile</p> }</div>
                    <div style={btnWidth} className={styles.nav_btn}> <WorkHistoryOutlinedIcon className={styles.icon} /> {toggle && <p>History</p>} </div>
                    <div style={btnWidth} className={styles.nav_btn}> <LogoutIcon className={styles.icon} /> {toggle && <p>Sign out</p>}</div>
                </nav>
                <div className={styles.content} >
                    <h1>Welcome {name} </h1>
                </div>
            </div>
        </>
     );
}
 
export default Patient;