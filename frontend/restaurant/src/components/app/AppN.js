import React from 'react'
import { Route, Router } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'

import HomePage from '../main/HomePage'
import NavN from '../nav/NavN'

const AppN = () => {
  return (
    <div id="top">
        
        <NavN />
        <div className="search-container" data-search-container>

            <div className="search-box">
            <input type="search" name="search" aria-label="Search here" placeholder="Search..."
                className="search-input"/>

            <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
                <GoSearch />
            </button>
            </div>

            <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>

        </div>
        <main>
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
        </main>
    </div>
  )
}

export default AppN
