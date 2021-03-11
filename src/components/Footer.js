import React from "react";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h4>
          <strong>Nissan.</strong> Innovation that excites.
        </h4>
        <div className={styles.footerItems}>
          <div>
            <h5>COTIZACIÓN DE VEHÍCULOS</h5>
            <ul>
              <li>
                <a>Información Legal</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>RALITOR S.A</h5>
            <ul>
              <li>
                <a>nissan.com.uy</a>
              </li>
              <li>
                <a>Políticas de Cookies</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>AYUDA AL CLIENTE</h5>
            <ul>
              <li>
                <a>Politicas de Privacidad</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>NISSAN SOCIAL</h5>
            <div>REDES SOCIALES</div>
          </div>
        </div>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.copyRights}>
        <p>&copy;2020 SIMPLICAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
