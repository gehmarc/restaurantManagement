// import {useState} from 'react'
import './admin.css'
import MainPanel from './Main/MainPanel';
import {Route, Routes} from 'react-router-dom';
// import Loans from './Main/Loans';
import Books from './Main/Books';
import { LoanBookProvider } from './Main/LoanBookContext';
import AdminNav from './AdminNav';
// import Login from './Login';
// import Signup from './Main/Signup';
// import ChatSection from './Main/ChatSection';

function Main(){
    
    
    return(
        <>
            <AdminNav />
            <LoanBookProvider>
            <div id ="main">
                <MainPanel />
                <Routes>
                    {/* <Route path = '/login'><Login /></Route>
                    <Route path = '/create-account'><Signup /></Route>
                    <Route path = '/loanedbooks'><Loans /></Route> */}
                    <Route path = '/allbooks' element={<Books />} />
                </Routes>
            </div>
            </LoanBookProvider>
        </>
    )
}

export default Main;
