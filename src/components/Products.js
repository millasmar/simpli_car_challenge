import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/products.module.css";
import Arrow from "../images/arrowRed.svg";

function Products({ products, handleClick }) {
  return (
    <div className={styles.main}>
      {products.results &&
        products.results.map((car) => {
          return (
            <div className={styles.card} key={car.id}>
              <img
                alt="Imágen de vehículo"
                src={`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${car.gallery[1].large}`}
              />
              <h2>{car.model.toUpperCase()}</h2>
              <hr></hr>
              <div className={styles.cardText}>
                <h3>PRECIO DESDE</h3>
                <p>
                  <strong>{`US$ ${car.amount}`}</strong>
                </p>
              </div>
              <hr></hr>

              <Link
                onClick={() => {
                  handleClick(car.id);
                }}
                to={`/producto/${car.id}`}
                className={styles.cardButton}
              >
                VER DETALLES DE MODELO
                <img src={Arrow} />
              </Link>
              <p id={styles.text}>
                Imágenes meramente ilustrativas no reportando la realidad
                exacta, pudiendo existir variaciones en la percepción.
              </p>
            </div>
          );
        })}
      <p id={styles.smallText}>
        *Los precios expuestos en este catálogo son expresados en dólares
        americanos. Los mismos incluyen IVA y podrán variar en función al modelo
        y/o versió elegida. El precio por unidad reflejado en este catálogo
        refiere a la unidad de versión más económica por cada modelo. RALITOR SA
        se reserva el derecho de modificar y actualizar los mismos en cualquier
        momento. Es responsabilidad del cliente confirmar al momento de su
        compra, el precio final que aparece en el catálogo. No se incluyen
        Gastos de empadronamiento ni cualquier tipo de costo municipal, así como
        tampoco gastos de traslados, fletes o seguros del vehículo. No incluye
        costos de instalación de accesorios.
      </p>
    </div>
  );
}

export default Products;
