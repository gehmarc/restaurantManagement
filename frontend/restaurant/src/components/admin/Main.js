// import {useState} from 'react'
import './admin.css'
import MainPanel from './Main/MainPanel';
import {Route, Routes} from 'react-router-dom';
import AdminNav from './AdminNav';
import Dashboard from './dashboard/Dashboard';
import ManageFood from './Main/ManageFood';
import CreatFood from './Food/CreatFood';
import BookCreate from './Food/BookCreate';
import ManageOrder from './Main/ManageOrder';

function Main(){
    
    
    return(
        <>
            <AdminNav />
                <MainPanel />
                <div className='admin_pages'>
                    <Routes>
                        <Route path = '/foods/manage-food' element={<ManageFood />} />
                        <Route path = '/foods/manage-orders' element={<ManageOrder />} />
                        <Route path = '/foods/create-food' element={<CreatFood />} />
                        <Route path = '/' element={<Dashboard />} />
                        
                    </Routes>
                </div>
        </>
    )
}

export default Main;
