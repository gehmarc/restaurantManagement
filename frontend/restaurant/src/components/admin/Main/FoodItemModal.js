import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'

const FoodItemModal = ({ handleRemoveModal, food }) => {
  return (
    <div className='foodModal'>
        <div className='shadow' onClick={handleRemoveModal} />
        <div className='modalContainer'>
            <div className='imagePreview'>
              {
                food?.image ?
                <img src={require(`./${food?.image}`).default} alt={ food?.name } />
                :
                <span className='image_previewIcon'><AiOutlineCamera /></span>

              }
            </div>
            <div className='foodmodal_content'>
                <h1>{ food?.name }</h1>
                <div className='food_title'>XAF { food?.price }</div>
                {/* <div className='pri' */}
            </div>
        </div>
    </div>
  )
}

export default FoodItemModal
