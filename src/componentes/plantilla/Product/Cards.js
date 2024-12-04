import React from "react";
import "./assets/css/main.min.css"; // ruta

const ProductList = () => {
  return (
    <div className="content-wrapper-scroll">
      <div className="content-wrapper">
        <div className="row gx-3">
          <div className="col-sm-12 col-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Product List</div>
                <div className="ml-auto">
                  <a href="view-cart.html" className="btn btn-dark">
                    <span className="badge shade-red me-2">2</span>View Cart
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="row gx-3">
                  {[
                    {
                      img: "assets/images/food/img6.jpg",
                      title: "Green Salad",
                      discountPrice: "$20",
                      actualPrice: "$24",
                      offPrice: "50% Off",
                      ratingClass: "rate2",
                      totalRatings: 1050,
                      description:
                        "Xuartz movement, manufactured by Zitizen watch co., ltd.",
                    },
                    {
                      img: "assets/images/food/img1.jpg",
                      title: "Nicoise Salad",
                      discountPrice: "$19",
                      actualPrice: "$27",
                      offPrice: "30% Off",
                      ratingClass: "rate1",
                      totalRatings: 2750,
                      description:
                        "Xuartz movement, manufactured by Zitizen watch co., ltd.",
                    },
                    // Agregar más productos
                  ].map((product, index) => (
                    <div className="col-xxl-3 col-md-4 col-sm-6 col-12" key={index}>
                      <div className="product-card">
                        <img
                          className="product-card-img-top"
                          src={product.img}
                          alt="Product"
                        />
                        <div className="product-card-body">
                          <h5 className="product-title">{product.title}</h5>
                          <div className="product-price">
                            <span className="disount-price">
                              {product.discountPrice}
                            </span>
                            <span className="actucal-price">
                              {product.actualPrice}
                            </span>
                            <span className="off-price">{product.offPrice}</span>
                          </div>
                          <div className="product-rating">
                            <div className={`${product.ratingClass} rating-stars`}></div>
                            <div className="total-ratings">
                              {product.totalRatings}
                            </div>
                          </div>
                          <div className="product-description">
                            {product.description}
                          </div>
                          <div className="product-actions">
                            <button className="btn btn-success addToCart">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
