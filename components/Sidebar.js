import styles from "../styles/Patient.module.css"
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
const Sidebar = () => {
    const [toggle, setToggle]= useState(true)
    const [panel, setPanel]= useState({width: "17vw"})
    const [btnWidth, setBtnWidth]= useState({width: "80%"})
    // toggle the navigation panel
    const handleClick= ()=>{
        toggle ? setToggle(false) : setToggle(true) 
        toggle ? setPanel({width: "10vw"}) : setPanel({width: "17vw"})
        toggle ? setBtnWidth({width: "fit-content"}) : setBtnWidth({width: "80%"})
    }
    return (    
        <nav style={panel} className={styles.navigation_panel}>
            <div style={btnWidth} className={styles.panel_head} >
                <div onClick={()=> handleClick()}  className={styles.check} >
                    <MenuIcon className={styles.menu_icon} />
                </div>
                {toggle && <h2 className={styles.panel_name} > Health </h2>}
            </div>
            <div style={btnWidth} className={styles.nav_btn}> <HomeIcon className={styles.icon} /> {toggle && <p>Home</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <AddIcon className={styles.icon} /> {toggle && <p>Book</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <WorkHistoryOutlinedIcon className={styles.icon} /> {toggle && <p>History</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <PersonIcon className={styles.icon} /> {toggle && <p>Profile</p> }</div>
            <div style={btnWidth} className={styles.nav_btn}> <LogoutIcon className={styles.icon} /> {toggle && <p>Sign out</p>}</div>
        </nav>        
     );
}
 
export default Sidebar;