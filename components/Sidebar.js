import styles from "../styles/Patient.module.css"
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect, useState } from "react";
import Link from "next/link";
const Sidebar = ({setContentWidth, setControlWidth}) => {
    const [toggle, setToggle]= useState(true)
    const [miniToggle, setMiniToggle]= useState(false)
    const [panel, setPanel]= useState()
    const [btnWidth, setBtnWidth]= useState()

    // toggle the navigation panel
    const handleClick= ()=>{
        if(window.innerWidth > 550){
            toggle ? setToggle(false) : setToggle(true) 
            toggle ? setPanel({width: "10vw"}) : setPanel({width: "20vw"})
            toggle ? setControlWidth({width: "10vw"}) : setControlWidth({width: "20vw"})
            toggle ? setBtnWidth({width: "fit-content"}) : setBtnWidth({width: "80%"})
            toggle ? setContentWidth({width: "90vw"}) : setContentWidth({width: "80vw"})
            
        }else if(window.innerWidth <= 550){
            miniToggle ? setMiniToggle(false) : setMiniToggle(true) 
            miniToggle ? setPanel({left: "-60vw"}) : setPanel({left: "0"})
        }
        
    }
   
    return (    
        <nav style={panel} className={styles.navigation_panel}>
            <div style={btnWidth} className={styles.panel_head} >
                <div onClick={()=> handleClick()}  className={styles.check} >
                    <MenuIcon className={styles.menu_icon} />
                </div>
                {toggle && <h2 className={styles.panel_name} > Health </h2>}
            </div>
            <div style={btnWidth} className={styles.nav_btn}> 
                <Link href="/patient"><a className={styles.anchor}><HomeIcon className={styles.icon} /> {toggle && <p>Home</p>}</a></Link> 
            </div>
            <div style={btnWidth} className={styles.nav_btn}> 
                <Link href="/patient/profile"><a className={styles.anchor}><PersonIcon className={styles.icon} /> {toggle && <p>Profile</p> }</a></Link> 
            </div> 
            <div style={btnWidth} className={styles.nav_btn}> 
                <Link href="/patient/book"><a className={styles.anchor}><AddIcon className={styles.icon} /> {toggle && <p>Book</p>}</a></Link> 
            </div> 
            <div style={btnWidth} className={styles.nav_btn}> 
                <Link href="/patient/history"><a className={styles.anchor}><WorkHistoryOutlinedIcon className={styles.icon} /> {toggle && <p>History</p>} </a></Link> 
            </div> 
            <div style={btnWidth} className={styles.nav_btn}> 
                <Link href="/patient/logout"><a className={styles.anchor}><LogoutIcon className={styles.icon} /> {toggle && <p>Sign out</p>}</a></Link> 
            </div>
        </nav>        
     );
}
 
export default Sidebar;