import React from "react";
import "../styles/Card.css";

export const Card = ({ image, name, desc, price, link, company, index }) => {
  let top = 60 + index * 65;
  let topText = top.toString() + "vh";
  const cardStyle = {
    top: topText,
  };
  return (
    <div style={cardStyle} className={`each-card-${company}`}>
      <img className={`img-${company}`} src={image} alt="product" />
      <div className={`name-${company}`}>{name}</div>
      <div className={`desc-${company}`}>{desc}</div>
      <p className={`price-${company}`}>₹ {price}</p>

      <a className={`link-container-${company}`} href={link}>
        Checkout the product
      </a>
    </div>
  );
};
