import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";
import { db, auth } from "../../lib/firebase";
import { 
    onSnapshot, doc, 
    updateDoc, getDoc, query, where 
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Profile.module.css"


       
const Profile = () => {
    const router= useRouter()
    const [user, setUser]= useState(auth.currentUser)
    const [profile, setProfile]= useState({
        firstName: "",
        secondName: "",
        email: "",
        phoneNumber: "",
        homeAddress: ""
    })
    const [email, setEmail]= useState()
    
    useEffect(()=>{
        if(user){
            const userRef= doc(db, "patients", user.uid)
            onSnapshot(userRef, (userData)=>{
                setEmail(userData.data().email)
                setProfile({
                    firstName: userData.data().first_name
                })
                console.log(profile);
            })         
        }else{
            console.log("No such user");
        }  
    }, [user])
      
    // update user profile
    const handleChange= (e, field)=>{
        // console.log(e.target.value);
        console.log(e);
        setProfile({
            field: e.target.value
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        updateProfile(auth.currentUser, {
            displayName: profile.firstName
        }).then(()=>{
            const updatedUser= doc(db, "patients", user.uid)
            updateDoc(updatedUser, {
                first_name: profile.firstName
            }).then(()=>{
                alert("Profile Details Updated")
            }).catch(()=>{
                alert("Error Try again")
            })
        }).catch(()=>{
            alert("Error Try Again")
        })
        // console.log("Clicked");
    }
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
                    <form className={styles.details}>
                        <div className={styles.patient_details}>
                            <label htmlFor="first_name">First Name: </label>
                            <input 
                                type="text" 
                                name="first_name"
                                value= {profile.firstName}
                                onChange={e => handleChange(e, "firstName")}
                            />
                        </div>
                        <div className={styles.patient_details}>
                            <label htmlFor="second_name">Second Name: </label>
                            <input 
                                type="text" 
                                name="second_name"
                                value= {profile.secondName}
                                onChange={e=> handleChange(e, "secondName")}
                                placeholder="Add Second Name"
                            />                            
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Email: <span>{email}</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2>Phone Number: <span>+25445778</span> </h2>
                        </div>
                        <div className={styles.patient_details}>
                            <h2> {profile.homeAddress} </h2>
                        </div>
                        <button onClick={e => handleSubmit(e)} >Update Profile</button>
                    </form>
                </div>             
            </div>
        </Layout>
        </>
     );
}
export default Profile;
<>
</>