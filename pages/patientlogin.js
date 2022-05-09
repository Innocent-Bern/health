import Head from "next/head";
import styles from "../styles/Patientlogin.module.css"
import Navbar from "../components/Navbar";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const PatientLogin = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(false)
    const router= useRouter()
    const handleSubmit= (e)=>{
        e.preventDefault()
        
        signInWithEmailAndPassword(auth, email, password)
            .then((cred)=>{
                router.push("/patient")
            })
            .catch((err)=>{
                setError(err.message)
            })
    }
    return ( 
        <>
        <Head>
            <title>Health App | Patient Login</title>
        </Head>
        <div className={styles.login_page}>
            <Navbar />
            <form className={styles.form}>
                { error && <p className={styles.err_msg}> {error} </p>}
                <h2> Patient Login</h2>
                <p className={styles.caption}> <i>Login with your email and passowrd</i> </p>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Please Enter Your Email"  
                    value={email} 
                    onChange= {e => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="passowrd" 
                    name="passowrd" 
                    value={password}
                    onChange= {e => setPassword(e.target.value)}
                    placeholder="Please Enter Your Password"
                    required
                />
                <button onClick={e => handleSubmit(e)} >Login</button>
            </form>
        </div>
        </>
     );
}
 
export default PatientLogin;