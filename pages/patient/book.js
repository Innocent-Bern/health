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
                <form className={styles.form} >
                    <h2>Book Appointment</h2>
                    <div className={styles.form_item}>
                        <label htmlFor="time">Select Appointment Time</label>
                        <input 
                            type="time" 
                            min="09:00"
                            max="18:00"
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