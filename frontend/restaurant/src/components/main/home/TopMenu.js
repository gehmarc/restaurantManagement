import React from 'react'

const TopMenu = () => {
  return (
    <section className="section food-menu" id="food-menu">
        <div className="container">

          <p className="section-subtitle">Popular Dishes</p>

          <h2 className="h2 section-title">
            Our Delicious <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            Everyone Deserves A Relaxing & Sumptuous day To Unwind! Spend Yours at our Restaurant with Chef's 
            special tangy and tasty dishes that will surely make your mouth watered!!!!!!!
          </p>

          <ul className="fiter-list">

            <li>
              <button className="filter-btn  active">All</button>
            </li>

            <li>
              <button className="filter-btn">Pizza</button>
            </li>

            <li>
              <button className="filter-btn">Burger</button>
            </li>

            <li>
              <button className="filter-btn">Drinks</button>
            </li>

            <li>
              <button className="filter-btn">Sandwich</button>
            </li>

          </ul>

          <ul className="food-menu-list">

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/fried chicken.png" width="300" height="300" loading="lazy"
                    alt="Fried chicken" className="w-100" />

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Chicken</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">Fried Chicken Unlimited</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price">2500.00 CFA</data>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/burgeregg.png" width="300" height="300" loading="lazy"
                    alt="Burger King Whopper" className="w-100" />

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Noddles</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">Burger</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="29.00">1500.00 CFA</data>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/pizegg.png" width="300" height="300" loading="lazy"
                    alt="White Castle Pizzas" className="w-100" />

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Pizzas</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">White Castle Pizzas</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">1500.00 CFA</data>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/fufu.jpg" width="300" height="300" loading="lazy"
                    alt="Fufu corn and njama njama" className="w-100" />

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Vegitable</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">Fufu corn and njama njama (huckleberry leaves)
                </h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="59.00 ">1500.00 CFA</data>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/food-menu-5.png" width="300" height="300" loading="lazy"
                    alt="Kung Pao Chicken BBQ" className="w-100" />

                  <div className="badge">-5%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Nuggets</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">Kung Pao Chicken BBQ</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">$49.00</data>

                  <del className="del">$69.00</del>

                </div>

              </div>
            </li>

            <li>
              <div className="food-menu-card">

                <div className="card-banner">
                  <img src="./assets/images/food-menu-6.png" width="300" height="300" loading="lazy"
                    alt="Wendy's Chicken" className="w-100" />

                  <div className="badge">-15%</div>

                  <button className="btn food-menu-btn">Order Now</button>
                </div>

                <div className="wrapper">
                  <p className="category">Chicken</p>

                  <div className="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>

                <h3 className="h3 card-title">Wendy's Chicken</h3>

                <div className="price-wrapper">

                  <p className="price-text">Price:</p>

                  <data className="price" value="49.00">$49.00</data>

                  <del className="del">$69.00</del>

                </div>

              </div>
            </li>

          </ul>


        </div>
      </section>
  )
}

export default TopMenu
