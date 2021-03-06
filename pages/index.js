import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <>
      <Head>
          <title>Health App | Home</title>
      </Head>
      <div className={styles.home} >
        <Navbar />
        <div className={styles.home_content}>
          <h2>Book A Doctors Appointment</h2>
          <div className={styles.home_content_text}>
         <i> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veritatis a vel, odio ad officia rerum consectetur nemo culpa? Dignissimos maxime qui tempora quibusdam eius animi sapiente molestiae est veniam.</p>
         </i></div>
        </div>
        <div className={styles.home_btn}>
          <Link href="/patientsignup"><a><button className={styles.sign_btn} >Sign Up</button></a></Link>
          <Link href="/patientlogin"><a><button className={styles.sign_btn} >Login</button></a></Link>
        </div>
      </div>
    </>
  )
}
