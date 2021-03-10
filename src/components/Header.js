import React from "react";
import styles from "../styles/header.module.css";
import nissanLogo from "../images/nissanLogo.jpeg";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <img alt="Logo Nissan" src={nissanLogo} className={styles.logo} />
        <a src="#">VEHÍCULOS</a>
        <a src="#">DESCUBRÍ NISSAN</a>
      </div>
      <form className={styles.form}>
        <input></input>
      </form>
    </nav>
  );
}

export default Header;
