import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainPanel.css'
import { IoIosLogOut } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbHexagonLetterH } from 'react-icons/tb'
import { ImSpoonKnife } from 'react-icons/im'
import { BsCashStack, BsChatSquareDots, BsPlusCircle } from 'react-icons/bs'

const MainPanel = ({user, handleLogoutModal}) => {
        const [sideNav, setSideNav] = useState(false);
        
        const navigate = useNavigate()

  return (
        <div id='mainPanel'>
        <aside className={`seller_nav_aside ${sideNav ? 'scale_side_nav': ''}`}>
                <div onClick={() => {setSideNav(!sideNav)}} className='burger nav_aside_link'>
                        <span className='nav_aside_icon'>
                                <TbHexagonLetterH />
                        </span>
                        <span className='nav_aside_text'>
                                Open
                        </span>
                </div>
                <div onClick={() => {navigate(`/blackrose/earnings`)}} className='burger nav_aside_link'>
                        <span className='nav_aside_icon'>
                                <BsCashStack />
                        </span>
                        <span className='nav_aside_text'>
                                Earnings
                        </span>
                </div>
                <div onClick={() => {navigate(`/foods/reservations`)}} className='burger nav_aside_link'>
                        <span className='nav_aside_icon'>
                                <BsChatSquareDots />
                        </span>
                        <span className='nav_aside_text'>
                                Reservations
                        </span>
                </div>
                <div onClick={() => {navigate('/foods/manage-orders')}} className='burger nav_aside_link'>
                        <span className='nav_aside_icon'>
                                <IoNotificationsOutline />
                        </span>
                        <span className='nav_aside_text'>
                                Orders
                        </span>
                </div>
                <div onClick={() => {navigate('/foods/manage-food')}} className='burger nav_aside_link'>
                        <span className='nav_aside_icon'>
                                <ImSpoonKnife />
                        </span>
                        <span className='nav_aside_text'>
                                Manage Food
                        </span>
                </div>
                <div onClick={ handleLogoutModal } className='dropdownNav-item nav_aside_link logoutNavLink'>
                        <span className='nav_aside_icon'>
                                <IoIosLogOut />
                        </span>
                        <span className='nav_aside_text'>
                                logout
                        </span>
                </div>
        </aside>

        </div>
  )
}

export default MainPanel
