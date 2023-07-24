// import {useState} from 'react'
import './admin.css'
import MainPanel from './Main/MainPanel';
import {Route, Routes, useNavigate} from 'react-router-dom';
import AdminNav from './AdminNav';
import Dashboard from './dashboard/Dashboard';
import ManageFood from './Main/ManageFood';
import CreatFood from './Food/CreatFood';
import BookCreate from './Food/BookCreate';
import ManageOrder from './Main/ManageOrder';
import { useState } from 'react';
import useLocalStorage from '../../UseLocalStorage';
import Earning from './earning/Earning';
import ReservationManagement from './Reservation/ReservationManagement';

function Main(){
    const [logoutModal, setLogoutModal] = useState(false)
    const [user, setUser] = useLocalStorage('user')
    const navigate = useNavigate()
    
    const logout = () => {
        setUser(null)
        navigate('/')
        window.location.reload()
    }
    const showLogoutModal = () => {
        setLogoutModal(true)
    }
    
    return(
        <>
            <AdminNav />
                <MainPanel handleLogoutModal={showLogoutModal} />
                <div className='admin_pages'>
                    <Routes>
                        <Route path = '/foods/manage-food' element={<ManageFood />} />
                        <Route path = '/foods/manage-orders' element={<ManageOrder />} />
                        <Route path = '/foods/create-food' element={<CreatFood />} />
                        <Route path = '/foods/reservations' element={<ReservationManagement />} />
                        <Route path = '/blackrose/earnings' element={<Earning />} />
                        <Route path = '/' element={<Dashboard />} />
                        
                    </Routes>
                </div>
                {
                    logoutModal && (
                        <div className='delete_modal'>
                            <div onClick={() => setLogoutModal(false)} className='shadow' />
                            <div className='delete_modal_content'>
                                <div className='modal_center_text'>
                                    This action will log you out of the system!
                                </div>
                                <div className='btn' onClick={ logout }>Logout</div>
                            </div>
                        </div>
                    )
                }
        </>
    )
}

export default Main;
