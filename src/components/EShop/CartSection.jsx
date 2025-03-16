/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const CartSection = () => {
    const items = useSelector((state) => state?.allCart?.items);


    return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - 2 items</h5>
              </div>
              <div className="card-body">
                {[ // Mock data for items
                  {
                    id: 1,
                    name: "Blue denim shirt",
                    color: "blue",
                    size: "M",
                    price: "$17.99",
                    image:
                      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp",
                  },
                  {
                    id: 2,
                    name: "Red hoodie",
                    color: "red",
                    size: "M",
                    price: "$17.99",
                    image:
                      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp",
                  },
                ].map((item) => (
                  <div key={item.id}>
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <img src={item.image} className="w-100" alt={item.name} />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                            ></div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p><strong>{item.name}</strong></p>
                        <p>Color: {item.color}</p>
                        <p>Size: {item.size}</p>
                        <button className="btn btn-primary btn-sm me-1 mb-2" title="Remove item">
                          <i className="fas fa-trash"></i>
                        </button>
                        <button className="btn btn-danger btn-sm mb-2" title="Move to wishlist">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button className="btn btn-primary px-3 me-2">
                            <i className="fas fa-minus"></i>
                          </button>
                          <input type="number" min="0" defaultValue="1" className="form-control" />
                          <button className="btn btn-primary px-3 ms-2">
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>{item.price}</strong>
                        </p>
                      </div>
                    </div>
                    <hr className="my-4" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p><strong>We accept</strong></p>
                {["visa.svg", "amex.svg", "mastercard.svg", "paypal.webp"].map((card, index) => (
                  <img
                    key={index}
                    className="me-2"
                    width="45px"
                    src={`https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/${card}`}
                    alt={card.split(".")[0]}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>$53.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <p className="mb-0">(including VAT)</p>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>
                <button className="btn btn-primary btn-lg btn-block">Go to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
