import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'


import './DashBoard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div className='dashboard'>
        <div className='container'>
            <div className='dashboard_card_wrapper'>
                <div className='dashboard_card'>
                    <div className='card_main'>
                        <div className='card_text'>
                            <div className='card_stat_count'>4</div>
                            <div className='card_stat_text'>Total Products</div>
                        </div>
                        <div className='card_svg'>
                            
                        </div>
                    </div>
                    <div onClick={() => navigate('/foods/manage-food')} className='card_link'>
                        <span className='card_link_text'>More Info </span><BsFillArrowRightCircleFill />
                    </div>
                </div>
                <div className='dashboard_card card_orders'>
                    <div className='card_main'>
                        <div className='card_text'>
                            <div className='card_stat_count'>51</div>
                            <div className='card_stat_text'>Total Paid orders</div>
                        </div>
                        <div className='card_svg'>

                        </div>
                    </div>
                    <div className='card_link'onClick={() => navigate('/foods/manage-orders')}>
                        <span className='card_link_text'>More Info </span><BsFillArrowRightCircleFill />
                    </div>
                </div>
                <div className='dashboard_card card_users'>
                    <div className='card_main'>
                        <div className='card_text'>
                            <div className='card_stat_count'>26</div>
                            <div className='card_stat_text'>Total Users</div>
                        </div>
                        <div className='card_svg'>

                        </div>
                    </div>
                    <div className='card_link'>
                        <span className='card_link_text'>More Info </span><BsFillArrowRightCircleFill />
                    </div>
                </div>
                <div className='dashboard_card'>
                    <div className='card_main'>
                        <div className='card_text'>
                            <div className='card_stat_count'>4</div>
                            <div className='card_stat_text'>Total Products</div>
                        </div>
                        <div className='card_svg'>

                        </div>
                    </div>
                    <div className='card_link'>
                        <span className='card_link_text'>More Info </span><BsFillArrowRightCircleFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
