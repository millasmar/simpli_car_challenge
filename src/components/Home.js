import React from "react";
import { Link } from "react-router-dom";
import Layout from "../containers/Layout";
import styles from "../styles/home.module.css";
import Arrow from "../images/arrow.svg";

function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.homeText}>
          <h1>AHORA ES ONLINE</h1>
          <p>
            Con Nissan Store, podés acceder a tu nuevo 0km con todos los
            servicios asociados desde la comodidad de tu sofá. Probanos!
          </p>

          <Link to="/productos" className={styles.homeButton}>
            INGRESAR A NISSAN STORE
            <img src={Arrow} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
