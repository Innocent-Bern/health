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
    const d = new Date()
    const months=  ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [user, setUser]= useState()
    const [name, setName]= useState()
    const [greeting, setGreeting]= useState("Good Morning")
    const [today, setToday]= useState({
        hour: d.getUTCHours(),
        day: d.getUTCDate(),
        month: months[d.getMonth()],
        year: d.getUTCFullYear(),
    })
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(true)
              setName(user.displayName)
            } else {
              setUser(false)
            }
          });   
        setToday({
            hour: d.getUTCHours(),
            day: d.getUTCDate(),
            month: months[d.getMonth()],
            year: d.getUTCFullYear(),
        })
        today.hour > 12 && today.hour <15 ? setGreeting("Good Afternoon") : setGreeting("Good Morning");
    },[today.hour])
    return (user &&
        <>
            <Head>
                <title>Health App | Patient Homepage</title>
            </Head>
            <Layout >
                    <div className={styles.top}>
                        <h1 className={styles.name} > {greeting} {name} </h1>
                        <div className={styles.date} > <i>{today.day} {today.month} {today.year} </i> </div>
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