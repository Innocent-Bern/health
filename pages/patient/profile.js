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
                <form className={styles.form} >
                    <h1>Profile Information</h1>
                    <div className={styles.image_div} ></div>
                    <div>
                        <label htmlFor="first_name">First Name: </label>
                        <input type="text" value={firstName} />
                    </div>
                    <div>
                        <label htmlFor="second_name">Second Name</label>
                        <input type="text" value={secondName} placeholder="Add" />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" placeholder="Add"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" value={email} disabled/>
                    </div>
                </form>                
            </div>
        </Layout>
        </>
     );
}
export default Profile;
<>
</>