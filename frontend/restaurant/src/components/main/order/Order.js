import React, { useLayoutEffect, useState } from 'react'
import './Order.css'
import FoodOne from './img/food_one.jpg'
import FoodTwo from './img/food_two.jpg'
import FoodThree from './img/food_three.jpg'
import DrinkOne from './drinks/argo.jpg'
import DrinkTwo from './drinks/blacklabel.jpg'
import DrinkThree from './drinks/wine/1000s.jpg'
import axios from 'axios'

const config = {
    headers: {
        "Content-Type": "application/json",
    }
}
const Order = () => {
    const [description, setDescription] = useState('')
    const [foods, setFoods] = useState([])
    const [premiumFoods, setPremiumFoods] = useState([])
    const [drinks, setDrinks] = useState([])
    const [pasteries, setPasteries] = useState([])
    const [paymentModal, setPaymentModal] = useState(false)

    
    useLayoutEffect(() => {
      getMenu()
    }, [])
    
    const getMenu = async() => {
        try{
            const res = await axios.get('http://127.0.0.1:8000/api/v1/restaurant/foods/', config)
            res.status === 200 && ExtractFoods(res.data)
        }
        catch(err){
            console.log(err);
        }
    }
    const ExtractFoods = (foods) => {
        const pf = foods.filter(food => food?.type === 'food' && food?.category === 'premium')
        const dk = foods.filter(food => food?.type === 'drink')
        const pt = foods.filter(food => food?.type === 'pastery')
        setDrinks(dk)
        setPremiumFoods(pf)
        setPasteries(pt)
    }
    const placeOrder = () => {
        setPaymentModal(!paymentModal)
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
                    <h1>Premium Foods</h1>

                    <div className='content_grid'>
                    {
                        premiumFoods.map(food => (
                            <PremiumFoods key={food.id} handlePlaceOrder={ placeOrder } food={food} />
                        ))
                    }
                    </div>

                    <div className='order_courses_image grid drink_grid'>
                        <img src={DrinkOne} className='order_courseImage_grid' alt='food achu' />
                        <img src={DrinkTwo}  className='order_courseImage_grid' alt='food achu' />
                        <img src={DrinkThree} className='order_courseImage_grid' alt='food achu' />
                    </div>
                    <h1>Drinks</h1>

                    <div className='content_grid'>
                    {
                        drinks.map(food => (
                            <Drinks key={food.id} handlePlaceOrder={ placeOrder } food={food} />
                        ))
                    }
                    </div>

                    <div className='order_courses_image grid pasteries_grid'>
                        <img src={FoodOne} className='order_courseImage_grid' alt='food achu' />
                        <img src={FoodTwo}  className='order_courseImage_grid' alt='food achu' />
                    </div>
                    <h1>Pasteries</h1>

                    <div className='content_grid'>
                    {
                        pasteries.map(food => (
                            <Pateries key={food.id} handlePlaceOrder={ placeOrder } food={food} />
                        ))
                    }
                    </div>
                    
                </div>
            </div>
            {
                paymentModal && (
                <div className='payment_popup'>
                    <div onClick={setPaymentModal(false)} className='shadow' />
                    <div className='payment_popup_modal'>
                        <h1>pay here</h1>
                        <h2>Name: Geh Mark</h2>
                        <h2>No: 675019932</h2>
                        <div className='btn payment_btn'>Confirm Pay</div>
                    </div>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Order


const PremiumFoods = ({food, handlePlaceOrder}) => {
    const [description, setDescription] = useState('')
    return (
        <>
            <div className='food_order_item'>
                <div className='order_head'>
                    <h3>{ food?.name }</h3>
                    <div className=''>XAF { food?.price }</div>
                </div>
                <p>{ food?.description }</p>
                <div className='food_order_item_dropdown'>
                    <strong>More About this food</strong>
                    <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                    <div onClick={handlePlaceOrder}  className='btn reserveBtn'>Place Order</div>
                </div>
            </div>
        </>

    )
}
const Pateries = ({food, handlePlaceOrder}) => {
    const [description, setDescription] = useState('')
    return (
        <>
            <div className='food_order_item'>
                <div className='order_head'>
                    <h3>{ food?.name }</h3>
                    <div className=''>XAF { food?.price }</div>
                </div>
                <p>{ food?.description }</p>
                <div className='food_order_item_dropdown'>
                    <strong>More About this food</strong>
                    <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                    <div onClick={handlePlaceOrder}  className='btn reserveBtn'>Place Order</div>
                </div>
            </div>
        </>

    )
}
const Drinks = ({food, handlePlaceOrder}) => {
    const [description, setDescription] = useState('')
    return (
        <>
            <div className='food_order_item'>
                <div className='order_head'>
                    <h3>{ food?.name }</h3>
                    <div className=''>XAF { food?.price }</div>
                </div>
                <p>{ food?.description }</p>
                <div className='food_order_item_dropdown'>
                    <strong>More About this food</strong>
                    <textarea value={description} className='food_order_item_text_input' cols={2} onChange={e => setDescription(e.target.value)} placeholder='Special instructions?' />
                    <div onClick={handlePlaceOrder}  className='btn reserveBtn'>Place Order</div>
                </div>
            </div>
        </>

    )
}

