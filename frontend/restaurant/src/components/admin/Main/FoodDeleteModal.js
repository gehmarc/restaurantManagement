import axios from 'axios';
import React from 'react'

const FoodDeleteModal = ({ handleToggleModal, handleDeleteFood, food }) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const deleteFood = async() => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/v1/restaurant/foods/${food.id}/`, config);
            if (response.status === 204) {
                window.location.reload()
            }
        } catch (error) {
            console.error(error);
            return error
        }
    }
  return (
    <div className='delete_modal'>
        <div onClick={handleToggleModal} className='shadow' />
        <div className='delete_modal_content'>
            <div className='modal_center_text'>
                Are you sure you want to delete this food ?
            </div>
            <div className='btn' onClick={ deleteFood }>Delete</div>
        </div>
    </div>
  )
}

export default FoodDeleteModal
