import React from "react";
import PropTypes from "prop-types";
import { svgs } from "assets/svgs/index";
import "./styles.scss";

function Index({
  title,
  backgroundImage,
  defLogo,
  rate,
  voteCount,
  description,
  deliveryFee,
  isZFExpress,
  bestCoupon,
  deliveryTime,
}) {
  return (
    <figure className="vendor-card">
      <img src={backgroundImage} alt="" />
      {bestCoupon && <p className="best-coupon">{bestCoupon}</p>}
      <figcaption>
        <div className="vendor-logo">
          <img src={defLogo} alt="" />
        </div>
        <div className="vendor-title">
          <div className="vendor-name">
            <h4>{title}</h4>
            {/* <span className="badge">تا 20%</span>
            {svgs.satars} */}
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
          <div>
            <span className="delivery-type">
              {" "}
              {!isZFExpress ? "پیک فروشنده" : "ارسال اکسپرس"}
            </span>
            <span>{deliveryFee} تومان</span>
          </div>
          {deliveryTime > 0 && (
            <div className="delivery-time">
              <span>تا {deliveryTime} دقیقه</span>
              {svgs.time}{" "}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

Index.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  defLogo: PropTypes.string,
  rate: PropTypes.number,
  voteCount: PropTypes.number,
  description: PropTypes.string,
  deliveryFee: PropTypes.number,
  isZFExpress: PropTypes.bool,
  bestCoupon: PropTypes.string,
  deliveryTime: PropTypes.number,
};

export default Index;
