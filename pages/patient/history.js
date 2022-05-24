import Head from "next/head";
import Layout from "../../components/Layout";
import styles from "../../styles/History.module.css"
import AddIcon from '@mui/icons-material/Add';
import Link from "next/link";
const History = () => {
    return ( 
        <>
        <Head>
            <title>Health App | Appointments</title>
        </Head>
        <Layout>
            <div className={styles.history}>
                <div className={styles.no_appointment}>
                    <h1>You have no appointments</h1>
                   
                    <div className={styles.book}>
                         <Link href={"/patient/book"}><a>
                        <div className={styles.control}>
                            <AddIcon className={styles.icon} />
                        </div>
                        </a></Link>
                        <h2>Book Appointment</h2>
                    </div>
                </div>
            </div>
        </Layout>
        </>
     );
}
 
export default History;