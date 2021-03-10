import React from "react";
import styles from "../styles/products.module.css";
import Van from "../images/orangeVan.jpg";
import Arrow from "../images/arrowRed.svg";

function Products({ data }) {
  console.log(data);
  return (
    <div className={styles.main}>
      {data &&
        data.map((car) => {
          return (
            <>
              <div className={styles.card}>
                <img src={Van} />
                <h2>{car.model.toUpperCase()}</h2>
                <hr></hr>
                <div className={styles.cardText}>
                  <h3>PRECIO DESDE</h3>
                  <p>
                    <strong>{`US$ ${car.amount}`}</strong>
                  </p>
                </div>
                <hr></hr>
                <button className={styles.cardButton}>
                  VER DETALLES DE MODELO
                  <img src={Arrow} />
                </button>
                <p id={styles.text}>
                  Imágenes meramente ilustrativas no reportando la realidad
                  exacta, pudiendo existir variaciones en la percepción.
                </p>
              </div>
            </>
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
