import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Layout from "../containers/Layout";
import axios from "axios";

function ProductsContainer() {
  const [data, setData] = useState([]);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    axios
      .get("https://4my1q6hsyo.api.quickmocker.com/product/", {
        headers: { Authorization: "Bearer qwertyuiopasdfghjklzxcvbnm123456" },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.results);
      });
  }, []);

  return (
    <Layout>
      <Products data={data}></Products>
    </Layout>
  );
}

export default ProductsContainer;
