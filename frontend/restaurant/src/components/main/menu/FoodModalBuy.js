import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'

const FoodModalBuy = ({ handleRemoveModal, food }) => {
  return (
    <div className='foodModal'>
        <div className='shadow' onClick={handleRemoveModal} />
        <div className='modalContainer'>
            <div className='imagePreview'>
              {
                food?.image ?
                // <img src={food?.image} alt={ food?.name } />
                <span className='image_previewIcon'><AiOutlineCamera /></span>
                :
                <span className='image_previewIcon'><AiOutlineCamera /></span>

              }
            </div>
            <div className='timeWrap'>
                <span>Dinner</span>
                <span>Lunch</span>
            </div>
            <div className='foodmodal_content'>
                <h1>{ food?.name }</h1>
                <div className='food_title'>XAF { food?.price }</div>
                <div className='foodmodal_desc'>{ food?.description }</div>
            </div>
            <div className='buy_btns'>
                <button className='orderBtn addtocart'>Add to My order</button>
                <button className='orderBtn'>Order</button>
            </div>
        </div>
    </div>
  )
}

export default FoodModalBuy

