import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Reservation.css'
import useLocalStorage from '../../../UseLocalStorage'
import Blog from '../home/Blog';
import ReservationModal from './ReservationModal';
import { BsChevronDown } from 'react-icons/bs'
import { IoTrashBinOutline } from 'react-icons/io5'
import { GoPencil } from 'react-icons/go'
import { PiArrowCounterClockwiseDuotone } from 'react-icons/pi'
import axios from 'axios';

const Reservation = () => {
  const [user, setUser] = useLocalStorage('user')
  const [name, setName] = useState('')
  const [number, setNumber] = useState(2)
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [submitingForm, setSubmitingForm] = useState(false)
  const timeList = [
    {
      hh: "07",
      mm: "00",
      state: "PM"
    },
    {
      hh: "08",
      mm: "00",
      state: "PM"
    },
    {
      hh: "09",
      mm: "00",
      state: "PM"
    },
    {
      hh: "10",
      mm: "00",
      state: "PM"
    },
    {
      hh: "12",
      mm: "00",
      state: "PM"
    },
    {
      hh: "01",
      mm: "00",
      state: "PM"
    },
    {
      hh: "02",
      mm: "00",
      state: "PM"
    },
    {
      hh: "03",
      mm: "00",
      state: "PM"
    },
    {
      hh: "04",
      mm: "00",
      state: "PM"
    },
    {
      hh: "05",
      mm: "00",
      state: "PM"
    },
    {
      hh: "06",
      mm: "00",
      state: "PM"
    },
  ]
  const timeVariance = ['15', '30', '45']
  const [personDropdown, setPersonDropdown] = useState(false)
  const [person, setPerson] = useState(2)
  const [reservationDD, setReservationDD] = useState(false)
  const [level, setLevel] = useState('Reservation type')
  const [timeDD, setTimeDD] = useState(false)
  const [time, setTime] = useState(timeList[0])

  

  const [allReservations, setAllReservations] = useState([])
  const people = new Array(19).fill(0)
  const config = {
    headers: {
        "Content-Type": "application/json",
    }
}

  const navigate = useNavigate()

  useLayoutEffect(() => {
    if(!user){
      navigate('/login')
      window.location.reload()
    }
    fetchReservations()
  }, [])

  const fetchReservations = async() => {
    try{
      const user_id = user?.user?.id
      const res = await axios.get(`http://127.0.0.1:8000/api/v1/restaurant/reservations/${user_id}/`, config)
      res.status === 200 && setAllReservations(res.data)
      

    }
    catch(err){
      console.warn(err);
    }
  }
  const form = {
    "name": name,
    "count": person,
    "created_by": user?.user?.id, 
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
  const selectPersons = (person) => {
    setPerson(person)
    setPersonDropdown(false)
  }
  const selectLevel = (level) => {
    setLevel(level)
    setReservationDD(false)
  }
  const selectTime = (time) => {
    setTime(time)
    setTimeDD(false)
  }

  const updateTime = (variant) => {
    time.mm = variant
    setTime(time)
  }
  const randomizeTime = () => {
    const randomTime = Math.floor(Math.random()*60 - 1).toString()
    updateTime(randomTime)
  }

  
  
  return (
    <>
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
              <label htmlFor='date'>Date</label>
              <input type='date' className='auth_form_input reservation_form_input' name='date' placeholder='Date' value={date} onChange={e => setDate(e.target.value)} />
              
              <div className='dropdown_form_input'>
                <label htmlFor='name'>Level</label>
                <div className='dropdownWrapper'>
                  <div onClick={() => setReservationDD(!reservationDD)} type="text" className="form_input dropdown">
                      <span id='level_placeholder'>{ level }</span>
                      <span className="dropdown_indicator"><BsChevronDown /></span>
                  </div>
                  <div className={`dropdown-list ${reservationDD ? 'showlevelDropDown': ''}`}>
                      <div type="text" className="form_input dropdown dropdown_content">
                          <ul>
                              <li onClick={() => selectLevel('Standard')}>Standard</li>
                              <li onClick={() => selectLevel('Premium')}>Premium</li>
                          </ul>
                      </div> 
                  </div>
                </div>
              </div>

              <div className='dropdown_form_input'>
                <label htmlFor='name'>When?</label>
                <div className='dropdownWrapper'>
                  <div onClick={() => setPersonDropdown(!personDropdown)} type="text" className="form_input dropdown">
                      <span id='level_placeholder'>{ person } People</span>
                      <span className="dropdown_indicator"><BsChevronDown /></span>
                  </div>
                  <div className={`dropdown-list ${personDropdown ? 'showlevelDropDown': ''}`}>
                      <div type="text" className="form_input dropdown dropdown_content">
                          <ul>
                            {
                              people.map((_, index) =>(
                                <li key={index} onClick={() => selectPersons(index + 2)}>{ index + 2 } People</li>
                              ))
                            }
                          </ul>
                      </div> 
                  </div>
                </div>
              </div>


              <div className='dropdown_form_input'>
                <label htmlFor='name'>Time you want</label>
                <div className='dropdownWrapper'>
                  <div onClick={() => setTimeDD(!timeDD)} type="text" className="form_input dropdown">
                      <span id='level_placeholder'>{ time.hh }: { time.mm } {time.state}</span>
                      <span className="dropdown_indicator"><BsChevronDown /></span>
                  </div>
                  <div className={`dropdown-list ${timeDD ? 'showlevelDropDown': ''}`}>
                      <div type="text" className="form_input dropdown dropdown_content">
                          <ul>
                            {
                              timeList.map(timeStamp => (
                                <li key={timeStamp?.hh} onClick={() => selectTime(timeStamp)}>{timeStamp.hh}: {timeStamp.mm}  {timeStamp.state}</li>
                              ))
                            }
                          </ul>
                      </div> 
                  </div>
                </div>
              </div>
              <div className='time_variance'>
                <span>Variance: </span>
                <div className='time_variance_list'>
                  {
                    timeVariance.map(timeVariant => (
                      <span key={timeVariant} className='time_var' onClick={ () => updateTime(timeVariant) }>{ time?.hh }: { timeVariant } { time?.state }</span>
                    ))
                  }
                  {/* <span className='time_var'>07:30 PM</span>
                  <span className='time_var'>07:45 PM</span> */}
                  <span className='time_var' onClick={randomizeTime}>Random</span>
                </div>
              </div>


              
              <label htmlFor='name'>Anything else?</label>
              <textarea className='auth_form_input reservation_form_input' rows={5} value={description} onChange={e => setDescription(e.target.value)}></textarea>
              <input type='submit' className='book_reservation_btn' value='Book Now' />
            </form>
          </div>
        </div>
      </div>
    </div>
    {
      allReservations.length > 0 && (
        <UserRervation reservations={allReservations} />
      )
    }
    <Blog />
    </>
  )
}

export default Reservation

const UserRervation = ({ reservations}) => {
  const dayfunc = (dateString) => {
    if(dateString){
      const date = new Date(dateString)
      const day = new Date(date)
      const options = { weekday: 'long' };
      const dayOfWeek = day.toLocaleDateString('en-US', options);
      return dayOfWeek
    }
    return null
  }
    return (
      <div className='yourReservations'>
        <div className='container'>
          <div className='title'>Your reservations</div>

          <div className='reservation_list'>
            <div className='reservation_list_item'>
              <div className='reservation_attr'>Day</div>
              <div className='reservation_attr'>Date</div>
              <div className='reservation_attr'>Time</div>
              <div className='reservation_attr'>Seats</div>
              <div className='reservation_attr'>State</div>
              <div className='reservation_attr'>Actions</div>
            </div>
          </div>
          <div className='reservation_list'>
            {
              reservations.map(res => (
                <div key={res?.id} className='reservation_list_item'>
                  <div className='reservation_attr'>{ dayfunc(res?.date) }</div>
                  <div className='reservation_attr'>{ res?.date }</div>
                  <div className='reservation_attr'>{ res?.time } PM</div>
                  <div className='reservation_attr'>{ res?.count } People</div>
                  <div className='reservation_attr'>
                    <span className='reservation_attr_state state_complete'>{ res?.status }</span>
                  </div>
                  <div className='reservation_attr reservation_attr_del'>
                    <span className='reservation_attr_action action_delete'><IoTrashBinOutline /></span>
                    <span className='reservation_attr_action action_edit'><GoPencil /></span>
                    <span className='reservation_attr_action action_remake'><PiArrowCounterClockwiseDuotone /></span>
                  </div>
                </div>

              ))
            }
          </div>
        </div>
      </div>
    )
}
