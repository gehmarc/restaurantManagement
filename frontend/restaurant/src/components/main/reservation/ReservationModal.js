import React from 'react'
import axios from 'axios';

const ReservationModal = ({ handleCloseModal, reservation }) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const bookReservation = async() => {

    }
  return (
    <div className='delete_modal reservationModal'>
        <div onClick={handleCloseModal} className='shadow' />
        <div className='delete_modal_content'>
            <div className='modal_center_text'>
                <h2>Confirm your Information</h2>
                <p><strong>Dear {reservation?.name}</strong> You are booking a reservation for {reservation?.count} people, To be served on { reservation?.day } at {reservation?.time}. </p>
                <p>Do you want to proceed?</p>
            </div>
            <div className='btn reserveBtn' onClick={ bookReservation }>Book Now</div>
        </div>
    </div>
  )
}

export default ReservationModal;
