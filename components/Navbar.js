import styles from "../styles/Home.module.css"
import Link from "next/link";
const Navbar = () => {
    return ( 
        <div className={styles.home_header}>
          <Link href="/"><a><h1 className={styles.logo}>Health Center</h1></a></Link>
          <a><button className={styles.doc_btn}>Doctor</button></a>
        </div>
     );
}
 
export default Navbar;