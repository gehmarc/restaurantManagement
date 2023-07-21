import React, { useLayoutEffect, useState } from 'react'
import './Menu.css'
import axios from 'axios'
import { getRequest } from '../../../Request'
import FoodModalBuy from './FoodModalBuy'

const MainMenu = () => {
    const [foods, setFoods] = useState([])
    const [foodModalState, setFoodModalState] = useState(false)
    const [selectedFood, setSelectedFood] = useState({})

    useLayoutEffect(() => {
        fetchFoods()
      }, [])
  
    const fetchFoods = async() => {
        const res = await getRequest('/restaurant/foods/')
        res.status === 200 && setFoods(res.data)
    }
    const foodModal = (food) => {
    setFoodModalState(true)
    setSelectedFood(food)
    }
    const removeModal = () => {
    setFoodModalState(false)
    }

  return (
    <div className='menuPage'>
        {
            foodModalState && <FoodModalBuy food={selectedFood} handleRemoveModal = {removeModal} />
        }
        <div className='menu_header'>
            <div className='menu_hero_title'>MAIN MENU</div>
        </div>
        <div className='menu_list_wrapper'>
            <div className='menu_list'>
                <div className='menu_item'>
                    <div className='food_image_wrapper'>
                        <div className='food_image'></div>
                    </div>
                    <div className='food_desc'>
                        <div className='top'>
                            <div className='food_attr'>Rice and Beans</div>
                            <div className='food_attr food_attr_price'>XAF 1200</div>
                        </div>
                        <div className='food_detail'>
                            <p>content about the food goes here</p>
                        </div>
                    </div>

                </div>
                {
                    foods.map(food => (
                        <div onClick={() => foodModal(food)} key={ food?.id } className='menu_item'>
                            <div className='food_image_wrapper'>
                                <div className='food_image'></div>
                            </div>
                            <div className='food_desc'>
                                <div className='top'>
                                    <h3 className='food_attr'>{ food?.name }</h3>
                                    <div className='food_attr food_attr_price'>XAF { food.price }</div>
                                </div>
                                <div className='food_detail'>
                                    <p>{ food?.description }</p>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MainMenu
