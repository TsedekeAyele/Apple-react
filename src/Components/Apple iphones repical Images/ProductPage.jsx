// ===============================

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);
  const { pid } = useParams();
  const urlin = ["/iphonse.json", ""];

  useEffect(() => {
    fetch(urlin[0])
      .then((res) => res.json())
      .then((data) => {
        const prolist = data.products;
        const ssp = prolist.filter((product) => product.product_url === pid);
        setProducts(ssp);
      })
      .catch((err) => console.log(`Error located: ${err}`));
  }, [pid]); // 'urlin' is not needed in the dependency array because it is static

  let order = 1;

  return (
    <div>
      <section className="internal-page-wrapper top-100 my-5 py-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper fw-bold my-2">
                <h1 className="fw-bolder text-center">{pid}</h1>
              </div>
              <div className="brief-description my-3 mb-5">
                <h3>From Apple.com Product We bring: {pid}</h3>
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
