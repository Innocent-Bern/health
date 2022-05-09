import Head from "next/head";
import styles from "../styles/Patientsignup.module.css"
import Navbar from "../components/Navbar";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const PatientSignup = () => {
    const router= useRouter();
    const [email, setEmail]= useState("")
    const [name, setName]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(false)
    const handleSubmit= (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred)=>{
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(()=>{
                    router.push("/patient")
                })
                .catch((err)=>{
                    setError(err.message)
                })
                
            })
            .catch((err)=>{
                setError(err.message)
            })
    }
    return ( 
        <>
        <Head>
            <title>
                Health App | Patient Sign Up
            </title>
        </Head>
        <div className={styles.sign_up_page}>
            <Navbar />
            <form className={styles.sign_up_form}>
                {error && <p className={styles.error_msg}> {error} </p>}
                <h2 className={styles.form_header}> Welcome {name} </h2>
                <p className={styles.form_header_cpt}> <i>Patient Sign Up Form</i> </p>
                <div className={styles.form_item}>
                    <input 
                        name="name" 
                        type="text"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                        required
                        autoComplete="off"
                        placeholder="Please enter your first name"
                    />                    
                </div>
                <div className={styles.form_item}>
                    <input 
                        name="email" 
                        type="text"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        required
                        autoComplete="off"
                        placeholder="Please enter your email"
                    />
                </div>
                <div className={styles.form_item}>
                    <input 
                        name="password" 
                        type="password" 
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                        placeholder="Please enter your password"
                    />
                </div>
                <button className={styles.btn} onClick={e => handleSubmit(e)} >Sign Up</button>
            </form>
        </div>
        </>
     );
}
 
export default PatientSignup;