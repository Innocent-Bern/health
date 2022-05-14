import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../styles/Book.module.css"
const Book = () => {
    const handleClick= (e)=>{
        e.preventDefault()
    }
    return ( 
        <>
        <Head>
            <title>Health App | Book Appointment</title>
        </Head>
        <Layout>
            <div className={styles.book} >
            <h1>Book Your Next Appointment</h1>
                <form className={styles.form} >
                    <h2>Appointment form</h2>
                    <div className={styles.form_item}>
                        <label htmlFor="time">Select Appointment Time</label>
                        <input 
                            type="time" 
                            required 
                        />
                    </div>
                    <div className={styles.form_item}>
                        <label htmlFor="date">Pick Appointment Date</label>
                        <input type="date" required />
                    </div>
                    <button onClick={e => handleClick(e)} >Book Appointment</button>
                </form>
            </div>
        </Layout>
        </>
     );
}
 
export default Book;