import React, { useLayoutEffect, useState } from 'react'
import './Manager.css'
import { AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai'
import { LuEdit2 } from 'react-icons/lu'
import FoodItemModal from './FoodItemModal'
import { useNavigate } from 'react-router-dom'
import { getRequest } from '../../../Request'
import FoodDeleteModal from './FoodDeleteModal'

const ManageFood = () => {
    const [foodModal, setFoodModal] = useState(false)
    const [foods, setFoods] = useState([])
    const [deleteModal, setDeleteModal] = useState(false)
    const [currentDeleteFood, setCurrentDeleteFood] = useState(null)
    const [modalFood, setModalFood] = useState({})
    const navigate = useNavigate()

    useLayoutEffect(() => {
      fetchFoods()
    }, [])

    const fetchFoods = async() => {
        const res = await getRequest('/restaurant/foods/')
        res.status === 200 && setFoods(res.data)

    }
    const removeModal = () => {
        setFoodModal(!foodModal)
    }
    const toggleDeleteModal = (food) => {
        setDeleteModal(!deleteModal)
        setCurrentDeleteFood(food);
    }

    const toggleFoodModal = (food) => {
        setFoodModal(true)
        setModalFood(food)
    }
  return (
    <div className='foodManage'>
        {
            foodModal && <FoodItemModal food={modalFood} handleRemoveModal = {removeModal} />
        }
        {
            deleteModal && <FoodDeleteModal food={currentDeleteFood} handleToggleModal = {toggleDeleteModal} />
        }
        <div className='container'>
            <div className='dashboard_title'>Manage Available Foods</div>
            <div className='add_food_btn_wrapper'>
                <div className='add_food_btn' onClick={() =>navigate('/foods/create-food')}>Add Food</div>
            </div>
            <div className='dashboard_table_wrapper'>
                <table className='dashboard_table'>
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Available</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(food => (
                                <tr key={food.id} draggable onDoubleClick={() =>toggleFoodModal(food)}>
                                    <td draggable>{ food?.name }</td>
                                    <td draggable>{ food?.price }</td>
                                    <td draggable>{ food?.category }</td>
                                    <td className='center_tableData'><span draggable className='table_item_available'>Available</span></td>
                                    <td><span draggable className='table_item_available table_item_close'>Open</span></td>
                                    <td>
                                        <div className='action_btn_wrapper'>
                                            <span className='action_btn delete_action_btn' onClick={() =>toggleDeleteModal(food)}><AiOutlineDelete /></span>
                                            <span className='action_btn'><LuEdit2 /></span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ManageFood
