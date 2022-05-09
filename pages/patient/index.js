import Head from "next/head";
import { auth } from "../../lib/firebase";
import { useState } from "react";
import styles from "../../styles/Patient.module.css"
import Sidebar from "../../components/Sidebar";

const Patient = () => {
    const [user, setUser]= useState(true)
    const [name, setName]= useState("What's happening baby")
    
    // Authenticate user
    const current =auth.currentUser;

    return (
        <>
            <Head>
                <title>Health App | Patient Homepage</title>
            </Head>
            <div className={styles.home_page}>
                <Sidebar />
                <div className={styles.content} >
                    <h1>Welcome {name} </h1>
                </div>
            </div>
        </>
     );
}
 
export default Patient;