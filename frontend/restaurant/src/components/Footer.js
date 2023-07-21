import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-top" >
      <div className="container">

        <div className="footer-brand">

          <a href="" className="logo">Black Rose Luxe<span className="span">.</span></a>

          <p className="footer-text">
            Financial experts support or help you to find out which way you can raise your funds more.
          </p>

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Contact Info</p>
          </li>

          <li>
            <p className="footer-list-item">+237 658-424-186</p>
          </li>

          <li>
            <p className="footer-list-item">blackroseluxe3@gmail.com</p>
          </li>

          <li>
            <address className="footer-list-item">Comercial Avenue - Bamenda</address>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Opening Hours</p>
          </li>

          <li>
            <p className="footer-list-item">Tuesdays-Sundays: 08:00AM-8:30PM</p>
          </li>

          <li>
            <p className="footer-list-item">Tuesday 4PM: Till Mid Night</p>
          </li>

          <li>
            <p className="footer-list-item">Saturday: 10:00-16:00</p>
          </li>

        </ul>

        <form action="" className="footer-form">

          <p className="footer-list-title">Book a Table</p>

          <div className="input-wrapper">

            <input type="text" name="full_name" required placeholder="Your Name" aria-label="Your Name"
              className="input-field" />

            <input type="email" name="email_address" required placeholder="Email" aria-label="Email"
              className="input-field" />

          </div>

          <div className="input-wrapper">

            <select name="total_person" aria-label="Total person" className="input-field">
              <option value="person">Person</option>
              <option value="2 person">2 Person</option>
              <option value="3 person">3 Person</option>
              <option value="4 person">4 Person</option>
              <option value="5 person">5 Person</option>
            </select>

            <input type="date" name="booking_date" aria-label="Reservation date" className="input-field" />

          </div>

          <textarea name="message" required placeholder="Message" aria-label="Message" className="input-field"></textarea>

          <button type="submit" className="btn">Book a Table</button>

        </form>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="copyright-text">
          &copy; 2023 <a href="#" className="copyright-link">Black Rose Luxe</a> All Rights Reserved.
        </p>
      </div>
    </div>

  </footer>
  )
}

export default Footer
