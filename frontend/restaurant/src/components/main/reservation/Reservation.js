import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Reservation.css'
import useLocalStorage from '../../../UseLocalStorage'
import Blog from '../home/Blog';
import ReservationModal from './ReservationModal';

const Reservation = () => {
  const [user, setUser] = useLocalStorage('user')
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [date, setDate] = useState()
  const [time, setTime] = useState(null)
  const [description, setDescription] = useState('')
  const [submitingForm, setSubmitingForm] = useState(false)
  const [reservation, setReservation] = useState({})


  const navigate = useNavigate()

  // useLayoutEffect(() => {
  //   navigate('/login')
  //   window.location.reload()
  // }, [])
  const form = {
    "name": name,
    "count": number,
    "time": time,
    "date": date,
    "description": description
  }
  const submitForm = (e) => {
    e.preventDefault()
    setSubmitingForm(true)
  }
  const closeRersavationModal = () => {
    setSubmitingForm(false)
  }
  return (
    <div className='book_reservation'>
      {
        submitingForm && <ReservationModal reservation={form} handleCloseModal ={closeRersavationModal} />
      }
      <div className='container'>
        <div className='reservation_header'>
          <div className='title_reservation'>Book a reservation at Black Rose</div>
          <div className='reservation_form'>
            <form onSubmit={submitForm}>
              <label htmlFor='name'>Full Name please</label>
              <input type='text' className='auth_form_input reservation_form_input' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
              <label htmlFor='name'>How Many People</label>
              <input type='number' className='auth_form_input reservation_form_input' placeholder='Places' value={number} onChange={e => setNumber(e.target.value)} />
              <label htmlFor='name'>When?</label>
              <input type='date' className='auth_form_input reservation_form_input' placeholder='time' value={date} onChange={e => setDate(e.target.value)} />
              <label htmlFor='name'>Time you want</label>
              <input type='time' className='auth_form_input reservation_form_input' placeholder='time' value={time} onChange={e => setTime(e.target.value)} />
              <br />
              <label htmlFor='name'>Anything else?</label>
              <textarea className='auth_form_input reservation_form_input' rows={5} value={description} onChange={e => setDescription(e.target.value)}></textarea>
              <input type='submit' className='book_reservation_btn' value='Book Now' />
            </form>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  )
}

export default Reservation
