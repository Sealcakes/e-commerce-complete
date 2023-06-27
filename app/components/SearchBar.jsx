"use client";

import { useState } from "react";
import styles from './SearchBar.module.css';



export default async function SearchBar() {
  const [searchField, setSearchField] = useState("");

  // Search Bar is breaking project page


  return (
    <div>
      <input
        className={styles.SearchBarInput}
        type="text"
        placeholder="Search Congo..."
        onChange={(e) => setSearchField(e.target.value)}
      ></input>
    </div>
  );
}
