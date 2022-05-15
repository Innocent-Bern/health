import Head from "next/head";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "../../styles/Patient.module.css"
import AddIcon from '@mui/icons-material/Add';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Layout from "../../components/Layout";

const Patient = () => {
    const [user, setUser]= useState()
    const [name, setName]= useState()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(true)
              setName(user.displayName)
            } else {
              setUser(false)
            }
          });        
    })
    return (user &&
        <>
            <Head>
                <title>Health App | Patient Homepage</title>
            </Head>
            <Layout >
                    <div className={styles.top}>
                        <h1 className={styles.name} >Good Evening {name} </h1>
                        <div className={styles.date} > <i>12th April</i> </div>
                    </div>
                    <div className={styles.items}>
                        <Link href="/patient/profile">
                            <a>
                                <div className={styles.home_item}>
                                    <div><PersonIcon className={styles.home_icon} /></div>
                                    <h3>View Profile</h3>
                                </div>
                            </a>
                        </Link>
                        <Link href="/patient/book">
                            <a>
                                <div className={styles.home_main}>
                                    <div><AddIcon className={styles.home_icon}/></div>
                                    <h3>Book Appointment</h3>
                                </div>
                            </a>
                        </Link>
                        <Link href="/patient/history">
                            <a>
                                <div className={styles.home_item}>
                                    <div><WorkHistoryOutlinedIcon className={styles.home_icon} /></div>
                                    <h3>View History</h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.bottom}>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, repellendus! Rem qui voluptas dolorum iure iste harum, blanditiis molestiae, voluptates soluta tenetur incidunt, necessitatibus ullam libero. Quaerat maiores cupiditate cumque?</i> </p>
                    </div>
            </Layout>
        </>
     );
}
 
export default Patient;