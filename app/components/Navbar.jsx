import Image from "next/image";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        src="/amazon-logo-transparent.png"
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
          <button type="submit"><FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} /></button>
        </form>
      </div>
    </div>
  );
}
