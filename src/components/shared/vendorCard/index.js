import React from "react";
import { svgs } from "./../../../assets/svgs/index";
import "./styles.scss";

function Index() {
  return (
    <figure className="vendor-card">
      <img
        src="https://cdn.snappfood.ir/400x266/uploads/images/vendors/covers/5e01b8a4bcf22.jpg"
        alt=""
      />
      <figcaption>
        <div className="vendor-logo">
          <img
            src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5e425b1b4cf0b.jpg"
            alt=""
          />
        </div>
        <div className="vendor-title">
          <div className="vendor-name">
            <h4>پیتزا شیلا (پارک ملت)</h4>
            <span className="badge">تا 20%</span>
            {svgs.satars}
          </div>
          <div className="vendor-rate">
            <span>(424254)</span>
            <span className="rate-number badge">4.4 {svgs.star} </span>
          </div>
        </div>
        <ul className="vendor-tags">
          <li>فست فود</li>
        </ul>
        <div className="delivery-options">
          <span className="delivery-type">پیک فروشنده</span>
          <span>9600 تومان</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default Index;
