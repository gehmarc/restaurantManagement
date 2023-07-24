import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ReservationModal = ({ handleCloseModal, reservation }) => {
    const [time, setTime] = useState('')
    const [serverTime, setServerTime] = useState('')
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }
    useEffect(() => {
      const time = `${reservation.time?.hh}: ${reservation.time?.mm} ${reservation.time?.state}`
      const anotherTime = `${reservation.time?.hh}:${reservation?.time?.mm}:00`
      setServerTime(anotherTime)
      setTime(time)
    }, [])
    

    const bookReservation = async() => {
        console.log(reservation);
        reservation.status = 'paid'
        reservation.time = serverTime
        try{
            const res = await axios.post('http://127.0.0.1:8000/api/v1/restaurant/reservations/',reservation, config)
            if(res.status === 201){
                // window.location.reload()
            }
        }
        catch(err) {
            console.warn(err);
        }
    }

  return (
    <div className='delete_modal reservationModal'>
        <div onClick={handleCloseModal} className='shadow' />
        <div className='delete_modal_content'>
            <div className='modal_center_text'>
                <h2>Confirm your Information</h2>
                <p><strong>Dear {reservation?.name}</strong> You are booking a reservation for {reservation?.count} people, To be served on { reservation?.day } at {time}. </p>
                <p>Do you want to proceed?</p>
            </div>
            <div className='btn reserveBtn' onClick={ bookReservation }>Book Now</div>
        </div>
    </div>
  )
}

export default ReservationModal;
