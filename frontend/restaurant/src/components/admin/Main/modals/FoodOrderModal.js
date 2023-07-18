import React from 'react'
import AnalogClock from 'analog-clock-react';

const FoodOrderModal = ({ handleRemoveModal }) => {
    let options = {
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
          second: "#d81c7a",
          minute: "#ffffff",
          hour: "#ffffff"
        }
    };
  return (
    <div className='foodModal'>
        <div className='shadow' onClick={handleRemoveModal} />
        <div className='modalContainer'>
            <div className='imagePreview'>
                <AnalogClock {...options} />
            </div>
            <div className='foodmodal_content'>
                <div className='food_title'><strong>Name: </strong>Geh Mark</div>
                <div className='food_title'><strong>Order ID: </strong>34</div>
                <div className='food_title'><strong>Status:  </strong>Active</div>
                {/* <div className='pri' */}
            </div>
        </div>
    </div>
  )
}

export default FoodOrderModal
