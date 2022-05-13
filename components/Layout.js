import Control from "./Control";
import Sidebar from "./Sidebar";
import styles from "../styles/Patient.module.css"
import { useState } from "react";
const Layout = ({children}) => {
    const [controlWidth, setControlWidth]= useState()
    const [contentWidth, setContentWidth]= useState();
    return ( 
        <div className={styles.home_page}>
            <Control controlWidth={controlWidth} />
            <Sidebar setControlWidth={setControlWidth} setContentWidth={setContentWidth} />
            <div style={contentWidth} className={styles.content} >
            {children}
            </div>
        </div>
     );
}
 
export default Layout;