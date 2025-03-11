import React from "react";
import "./BottomBanner.css";
import { Link } from "react-router-dom";

const BottomBanner = () => {
  const items = [
    {
      id: 1,
      title: "Drinks & Food",
      img: "https://www.shutterstock.com/image-vector/popcorn-drink-filmstrip-600nw-69929482.jpg",
      span: "Enjoy the convenience of mobile ordering. Simply place your order before your movie and it will be ready at your selected time when you arrive. Skip the line and enjoy the show!",
    },
    {
      id: 2,
      title: "VIP seats",
      img: "https://img.freepik.com/premium-vector/vip-member-golden-emblem_79145-245.jpg?semt=ais_hybrid",
      span: "Prepare to enjoy the movies like never before. Experience VIP seats with all of the enhanced technology that awaits. Best show ever is promise!",
    },
    {
      id: 3,
      title: "Special deals",
      img: "https://img.freepik.com/premium-vector/special-weekend-deals-promotional-ecommerce-offer-design-marketing-symbol_1280603-2568.jpg",
      span: "Every day before 4pm, movie tickets are 25% off the evening base ticket prices. It’s always perfect day to see a movie and save!",
    },
  ];

  return (
    <div className="bottom-banner">
      <div className="container">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`row align-items-center banner-row ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-md-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="banner-content col-md-8">
                  <h5 className="banner-title text-center">{item.title}</h5>
                  <span className="banner-text">{item.span}</span>
                  <Link to={""} className="btn btn-primary btn-sm">
                    See!
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="banner-content col-md-8">
                  <h5 className="banner-title text-center">{item.title}</h5>
                  <span className="banner-text">{item.span}</span>
                  <Link to={""} className="btn btn-primary btn-sm">
                    See!
                  </Link>
                </div>
                <div className="col-md-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomBanner;
