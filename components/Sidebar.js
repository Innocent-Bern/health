import styles from "../styles/Patient.module.css"
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
const Sidebar = ({setContentWidth}) => {
    const [toggle, setToggle]= useState(true)
    const [panel, setPanel]= useState({width: "20vw"})
    const [btnWidth, setBtnWidth]= useState({width: "80%"})
    // const [mouse, setMouse]= useState(false)
    // toggle the navigation panel
    const handleClick= ()=>{
        toggle ? setToggle(false) : setToggle(true) 
        toggle ? setPanel({width: "10vw"}) : setPanel({width: "20vw"})
        toggle ? setBtnWidth({width: "fit-content"}) : setBtnWidth({width: "80%"})
        toggle ? setContentWidth({width: "90vw"}) : setContentWidth({width: "80vw"})
    }
    // mouse event styles
    // let mouseIn={
    //     width: "80%"
    //  }
    //  let mouseOut={
    //      width: "fit-content"
    //  }
    // const handleMouseEvent= (e)=>{
    //     mouse ? setMouse(false) : setMouse(true) ;
    //     let btn= document.getElementsByClassName(e.target.classList);
    //     for(let i = 0; i < btn.length; i++){
    //         btn[i].addEventListener("mouseenter", (e)=>{
    //             e.target.classList.add("active")
    //             console.log("In");
    //         })
    //         btn[i].addEventListener("mouseleave", (e)=>{
    //             e.target.classList.remove("active")
    //             console.log("In");
    //         })
    //     }
        
    // }
    return (    
        <nav style={panel} className={styles.navigation_panel}>
            <div style={btnWidth} className={styles.panel_head} >
                <div onClick={()=> handleClick()}  className={styles.check} >
                    <MenuIcon className={styles.menu_icon} />
                </div>
                {toggle && <h2 className={styles.panel_name} > Health </h2>}
            </div>
            <div style={btnWidth} className={styles.nav_btn}> <HomeIcon className={styles.icon} /> {toggle && <p>Home</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <PersonIcon className={styles.icon} /> {toggle && <p>Profile</p> }</div>            
            <div style={btnWidth} className={styles.nav_btn}> <AddIcon className={styles.icon} /> {toggle && <p>Book</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <WorkHistoryOutlinedIcon className={styles.icon} /> {toggle && <p>History</p>} </div>
            <div style={btnWidth} className={styles.nav_btn}> <LogoutIcon className={styles.icon} /> {toggle && <p>Sign out</p>}</div>
        </nav>        
     );
}
 
export default Sidebar;