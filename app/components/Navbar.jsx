import Image from "next/image";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        src="/Congo_logo.png"
        alt=""
        height={170}
        width={170}
        className={styles.image}
      />
      <div className={styles.gpsContainer}>
        <FontAwesomeIcon className={styles.icon} icon={faLocationDot} height={20}/>
        <span className={styles.helloSpan}>Hello <br /></span>
        <span className={styles.addressSpan}>Select your address!</span>
      </div>
      <div className={styles.searchBar}>
        <form className={styles.searchBarForm}>
          <select className={styles.selectBox}>
            <option value='all-departments'>All</option>
            <option value='electronics'>Electronics</option>
            <option value='books'>Books</option>
            <option value='music'>CDs & Vinyls</option>
            <option value='gaming'>Gaming</option>
          </select>
          <input className={styles.searchBarInput} type="text" placeholder="Search Amazon" />
          <button className={styles.searchIcon} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} height={20}/></button>
        </form>
      </div>
      <div className={styles.btnsContainer}>
        <div className={styles.signinBtnContainer}>
          <button className={styles.signinBtn}>Sign in</button>
        </div>
        <div className={styles.cartBtnContainer}>
          <button className={styles.cartBtn}><FontAwesomeIcon icon={faCartShopping} height={20}/></button>
        </div>
      </div>
    </div>
  );
}
