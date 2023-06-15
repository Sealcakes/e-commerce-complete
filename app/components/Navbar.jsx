"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const { data } = useSession();

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
    if (!showProfileModal) {
      setShowCartModal(false);
    }
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
    if (!showCartModal) {
      setShowProfileModal(false);
    }
  };

  const userProfile = (data) => {
    if (data) {
      return (
        <img
          className={styles.profileBtn}
          src={data.user.image}
          alt="user profile"
          onClick={toggleProfileModal}
        />
      );
    } else {
      return (
        <button
          onClick={() => (location.href = "/login")}
          className={styles.signinBtn}
        >
          Sign In
        </button>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.navbar}>
      <Image
        src="/Congo_logo.png"
        alt=""
        height={170}
        width={170}
        className={styles.image}
        onClick={() => (location.href = "/")}
      />
      <div className={styles.gpsContainer}>
        <FontAwesomeIcon
          className={styles.gpsIcon}
          icon={faLocationDot}
          height={20}
        />
        <span className={styles.helloSpan}>
          Hello <br />
        </span>
        <span className={styles.addressSpan}>Select your address!</span>
      </div>
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit} className={styles.searchBarForm}>
          <select className={styles.selectBox}>
            <option value="all-departments">All</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="music">CDs & Vinyls</option>
            <option value="gaming">Gaming</option>
          </select>
          <input
            className={styles.searchBarInput}
            type="text"
            placeholder="Search Congo..."
          />
          <button className={styles.searchIcon} type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} height={20} />
          </button>
        </form>
      </div>
      <div className={styles.btnsContainer}>
        <div className={styles.cartBtnContainer}>
          <button onClick={toggleCartModal} className={styles.cartBtn}>
            <FontAwesomeIcon icon={faCartShopping} height={20} />
          </button>
          <div
            className={`${styles.cartModal} ${
              showCartModal ? styles.show : styles.hide
            }`}
          >
            {/* Automatically update cart with items or if empty show cart is empty */}
            <h2 className={styles.cartModalH2}>Your Cart</h2>
          </div>
        </div>
        <div className={styles.signinBtnContainer}>
          {userProfile(data)}
          <div
            className={`${styles.signoutModal} ${
              showProfileModal ? styles.show : styles.hide
            }`}
          >
            <button onClick={() => signOut(data)}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
