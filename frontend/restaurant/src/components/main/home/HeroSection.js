import React from 'react'

const HeroSection = () => {
  return (
    <>
      <article>
            <section className="hero imageHero" id="home">
                <div className="container">

                    <div className="hero-content">

                        <p className="hero-subtitle">Chill and Eat</p>

                        <h2 className="h1 hero-title">Supper delicious Food in town!</h2>

                        <p className="hero-text">Food is any substance consumed to provide nutritional support for an organism.</p>

                        <button className="btn">Book A Table</button>

                    </div>

                    <figure className="hero-banner">
                        <img src="../../staticImage/images/hero-banner-bg.png" width="820" height="716" alt="" aria-hidden="true"
                        className="w-100 hero-img-bg" />

                        <img src="../../staticImage//images/background4.png" width="700" height="637" loading="lazy" alt="export"
                        className="w-100 hero-img" />
                    </figure>

                </div>
            </section>
        </article>
    </>
  )
}

export default HeroSection
