import React, { useEffect, useState } from "react";
import styles from "../styles/modelDetails.module.css";
import Slider from "react-slick";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";

function ModelDetails({ product }) {
  console.log(product);
  const characteristics = product.detail.characteristics;
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${product.gallery[i].medium}`}
          />
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb",
    className: styles.div,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.main}>
      <div className={styles.back}></div>
      <div className={styles.row}>
        <div className={styles.container}>
          <h1
            style={{ textAlign: "center", fontSize: "1.5rem" }}
          >{`${product.model} ${product.name}`}</h1>
          <Slider {...settings}>
            {product.gallery.map((img) => {
              return (
                <img
                  className={styles.slideImg}
                  src={`https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/${img.medium}`}
                />
              );
            })}
          </Slider>
          <div className={styles.characteristics}>
            <div className={styles.charItems}>
              <span>
                <IoIcons.IoSpeedometerOutline
                  className={styles.icons}
                ></IoIcons.IoSpeedometerOutline>
                {characteristics.engine}
              </span>
              <span>
                <AiIcons.AiOutlineFileText
                  className={styles.icons}
                ></AiIcons.AiOutlineFileText>
                {characteristics.warranty}
              </span>
            </div>
            <div className={styles.charItems}>
              <span>
                <IoIcons.IoGitBranchOutline
                  className={styles.icons}
                ></IoIcons.IoGitBranchOutline>
                {characteristics.gas_type}
              </span>
              <span>
                <IoIcons.IoCarSportOutline
                  className={styles.icons}
                ></IoIcons.IoCarSportOutline>
                {characteristics.body}
              </span>
            </div>
          </div>
        </div>
        <div id={styles.containerForm} className={styles.container}>
          <h1>INGRESÁ TUS DATOS</h1>
          <p>
            Por favor completá el siguiente formulario para que uno de nuestros
            asesores se pueda contactar contigo.
          </p>
          <form>
            <input type="text" placeholder="NOMBRE Y APELLIDO" required></input>
            <input
              type="email"
              placeholder="CORREO ELECTRÓNICO"
              required
            ></input>
            <input type="text" placeholder="TELÉFONO" required></input>
            <button className={styles.button} type="submit">
              ENVIARME LA COTIZACIÓN POR MAIL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModelDetails;
