import React from 'react'

const CTA = () => {
  return (
    <section className="section section-divider white cta">
        <div className="container">

          <div className="cta-content">

            <h2 className="h2 section-title">
              The Black Rose Lux Have Excellent Of
              <span className="span">Quality Burgers!</span>
            </h2>

            <p className="section-text">
              The restaurant also catered to many europeans who had left across for visit.
              
            </p>

            <button className="btn btn-hover">Order Now</button>
          </div>

          <figure className="cta-banner">
            <img src="./assets/images/cta-banner.png" width="700" height="637" loading="lazy" alt="Burger"
              className="w-100 cta-img" />
          </figure>

        </div>
    </section>
  )
}

export default CTA
