import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]);
  const url = "/iphonse.json"; // URL as a string instead of an array

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Assuming the data structure is correct
      })
      .catch((err) => console.log(`Error Located in: ${err}`));
  }, [url]); // Include 'url' in the dependency array if it might change

  console.log(products);

  let order = 1;

  return (
    <div>
      <section className="internal-page-wrapper top-100 my-5 py-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper fw-bold my-2">
                <h1>Iphones</h1>
              </div>
              <div className="brief-description my-3 mb-5">
                <h3>The best for the brightest.</h3>
              </div>
            </div>
          </div>
          {products.map((product) => {
            const {
              product_url: id,
              product_name: title,
              product_img: img,
              product_brief_description: Brief,
              starting_price: StartPrice,
              price_range: PriceRange,
            } = product;
            const productPage = "/iphone/" + id;

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
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
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
