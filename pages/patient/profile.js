import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import { db, auth } from "../../lib/firebase";
import { 
    onSnapshot, doc, 
    updateDoc, getDoc, query, where 
} from "firebase/firestore";
import { useEffect, useState } from "react";
import styles from "../../styles/Profile.module.css"


       
const Profile = () => {
    const [firstName, setFirstName]= useState()
    const [secondName, setSecondName]= useState()
    const [email, setEmail]= useState()
    const user= auth.currentUser
    useEffect(()=>{
        if(user){
            const userRef= doc(db, "patients", user.uid)
            onSnapshot(userRef, (userData)=>{
                setFirstName(userData.data().first_name)
                setEmail(userData.data().email)
            })         
        }else{
            console.log("No such user");
        }  
    }, [user])
      
    // update user profile
    return ( user &&
        <>
        <Head>
            <title>Health App | Profile</title>
        </Head>
        <Layout>
            <div className={styles.profile}>
                <div className={styles.container}>
                    <h1>Profile Details</h1>
                    <div className={styles.profile_picture}></div>
                    <div className={styles.details}>
                        <div className={styles.patient_details}>
                            <h2>First Name: <span>Mary</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Last Name: <span>Maria</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Email: <span>imnndjidjicjxij@mail.com</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Phone Number: <span>+25445778</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Home Address: <span>AjHSDGSDGIRPOE</span> </h2>
                        </div>
                    </div>
                </div>             
            </div>
        </Layout>
        </>
     );
}
export default Profile;
<>
</>