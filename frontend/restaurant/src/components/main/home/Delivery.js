import React from 'react'
import { ReactComponent as DeliveryBoy } from "../../../staticImage/images/delivery-boy.svg";
import BannerBG from '../../../staticImage/images/delivery-banner-bg.png'
const Delivery = () => {
  return (
    <section className="section section-divider gray delivery">
        <div className="container">

          <div className="delivery-content">

            <h2 className="h2 section-title">
              A Moments Of Delivered On <span className="span">Right Time</span> & Place
            </h2>

            <p className="section-text">
              We deliver your takeouts or essential groceries from the best-rated local partners straight to your door.
            </p>

            <button className="btn btn-hover">Order Now</button>
          </div>

          <figure className="delivery-banner">
            <img src={BannerBG} width="700" height="602" loading="lazy" alt="clouds"
              className="w-100" />
            <DeliveryBoy className="w-100 delivery-img" data-delivery-boy />
            {/* <img src={DeliveryBoy} width="1000" height="880" loading="lazy" alt="delivery boy" */}
              {/* className="w-100 delivery-img" data-delivery-boy /> */}
          </figure>

        </div>
    </section>
  )
}

export default Delivery
