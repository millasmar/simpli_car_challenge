import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import nissanLogo from "../images/nissanLogo.jpeg";
import { IoMenu, IoSearchOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItems}>
        <Link to="/">
          <img alt="Logo Nissan" src={nissanLogo} className={styles.logo} />
        </Link>
        <a className={styles.navLinks} href="#">
          VEHÍCULOS
        </a>
        <a className={styles.navLinks} href="#">
          DESCUBRÍ NISSAN
        </a>
        <IoMenu id={styles.menu}></IoMenu>
      </div>

      <form className={styles.form}>
        <input placeholder="BUSCAR POR MODELO O VEHÍCULO"></input>
      </form>
    </nav>
  );
}

export default Header;
