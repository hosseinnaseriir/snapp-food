import React from "react";
import { svgs } from "assets/svgs/index";
import "./styles.scss";

function Index({
  title,
  backgroundImage,
  defLogo,
  rate,
  voteCount,
  description,
  deliver,
  deliveryFee,
  isZFExpress,
}) {
  return (
    <figure className="vendor-card">
      <img src={backgroundImage} alt="" />
      <figcaption>
        <div className="vendor-logo">
          <img src={defLogo} alt="" />
        </div>
        <div className="vendor-title">
          <div className="vendor-name">
            <h4>{title}</h4>
            <span className="badge">تا 20%</span>
            {svgs.satars}
          </div>
          <div className="vendor-rate">
            <span>({voteCount})</span>
            <span className="rate-number badge">
              {rate} {svgs.star}{" "}
            </span>
          </div>
        </div>
        <p className="vendor-tags">{description}</p>
        <div className="delivery-options">
          <span className="delivery-type">
            {" "}
            {!isZFExpress ? " پیک فروشنده" : "ارسال اکسپرس"}
          </span>
          <span>{deliveryFee} تومان</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default Index;
