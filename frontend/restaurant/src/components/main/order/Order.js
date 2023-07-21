import React, { useState } from 'react'
import './Order.css'
import FoodOne from './img/food_one.jpg'
import FoodTwo from './img/food_two.jpg'
import FoodThree from './img/food_three.jpg'

const Order = () => {
    const [description, setDescription] = useState('')
    const placeOrder = () => {

    }
  return (
    <div className='order_page'>
        <div className='container'>
            <div className='center_modal'>
                <h2 className='logo'>Black Rose LUXE</h2>
                <div className='order_courses_wrapper'>
                    <div className='order_courses_image grid'>
                        <img src={FoodOne} className='order_courseImage_grid' alt='food achu' />
                        <img src={FoodTwo}  className='order_courseImage_grid' alt='food achu' />
                        <img src={FoodThree} className='order_courseImage_grid' alt='food achu' />
                    </div>
                    <h1>Premium Eats</h1>
                    <div className='content_grid'>
                        <div className='food_order_item'>
                            <div className='order_head'>
                                <h3> Achu and Yellow soup</h3>
                                <div className=''>XAF 2500</div>
                            </div>
                            <p>Achu served with yellow or black soup and meat</p>
                            <div className='food_order_item_dropdown'>
                                <strong>More About this food</strong>
                                <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                                <div onClick={ placeOrder } className='btn reserveBtn'>Place Order</div>
                            </div>
                        </div>
                        <div className='food_order_item'>
                            <div className='order_head'>
                                <h3>Fufu and Kati-kati</h3>
                                <div className=''>XAF 5200</div>
                            </div>
                            <p>Fufu corn and hukerbery, served with chicken</p>
                            <div className='food_order_item_dropdown'>
                                <strong>More About this food</strong>
                                <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                                <div onClick={ placeOrder } className='btn reserveBtn'>Place Order</div>
                            </div>
                        </div>
                        <div className='food_order_item'>
                            <div className='order_head'>
                                <h3>Water fufu and Eru</h3>
                                <div className=''>XAF 3000</div>
                            </div>
                            <p>Water fufu and eru with meat and chicken</p>
                            <div className='food_order_item_dropdown'>
                                <strong>More About this food</strong>
                                <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                                <div onClick={ placeOrder } className='btn reserveBtn'>Place Order</div>
                            </div>
                        </div>
                        <div className='food_order_item'>
                            <div className='order_head'>
                                <h3>Ndole and plantain</h3>
                                <div className=''>XAF 3000</div>
                            </div>
                            <p>Ndole and fried riped plantain</p>
                            <div className='food_order_item_dropdown'>
                                <strong>More About this food</strong>
                                <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                                <div onClick={ placeOrder } className='btn reserveBtn'>Place Order</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order
