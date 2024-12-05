import React from "react";

const ProductCard = ({ image, title, discountPrice, actualPrice, discount, rating, totalRatings, description }) => {
    return (
        <div className="col-xl-3 col-sm-6 col-12">
        <div className="product-card">
            <img className="product-card-img-top" src={image} alt={title} />
            <div className="product-card-body">
            <h5 className="product-title">{title}</h5>
            <div className="product-price">
                <span className="discount-price">${discountPrice}</span>
                <span className="actual-price">${actualPrice}</span>
                <span className="off-price">{discount}% Off</span>
            </div>
            <div className="product-rating">
                <div className="rating-stars">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img
                    key={index}
                    src={
                        index < rating
                        ? "assets/images/star-selected.svg"
                        : "assets/images/star.svg"
                    }
                    alt={`${index + 1}`}
                    title={index + 1 <= rating ? "Selected" : "Not selected"}
                    />
                ))}
                </div>
                <div className="total-ratings">{totalRatings}</div>
            </div>
            <div className="product-description">{description}</div>
            <div className="product-actions">
                <button className="btn btn-success">Add to Cart</button>
            </div>
            </div>
        </div>
        </div>
    );
    };

    const PrincipalForm = () => {
    const products = [
        {
        image: "assets/images/food/img6.jpg",
        title: "Green Salad",
        discountPrice: 20,
        actualPrice: 24,
        discount: 50,
        rating: 5,
        totalRatings: 1050,
        description: "Xuartz movement, manufactured by Zitizen watch co., ltd.",
        },
        {
        image: "assets/images/food/img1.jpg",
        title: "Nicoise Salad",
        discountPrice: 19,
        actualPrice: 27,
        discount: 30,
        rating: 4,
        totalRatings: 2750,
        description: "Xuartz movement, manufactured by Zitizen watch co., ltd.",
        },
        {
        image: "assets/images/food/img8.jpg",
        title: "Augustin Salad",
        discountPrice: 18,
        actualPrice: 22,
        discount: 27,
        rating: 5,
        totalRatings: 3629,
        description: "Xuartz movement, manufactured by Zitizen watch co., ltd.",
        },
    ];

    return (
        <div className="content-wrapper">
        <div className="row gx-3">
            {products.map((product, index) => (
            <ProductCard key={index} {...product} />
            ))}
        </div>
        </div>
    );
    };

export default PrincipalForm;
