import React from 'react'

import {Link} from 'react-router-dom';
import Search from './Search';

function AdminNav(){

    
    const showAllBooks =e=>{
        const target = e.target.parentElement;
        target.classList.add("active");
        target.nextElementSibling.classList.remove("active");
        
    }
    
    const showLoanBooks =e=>{
        const target = e.target.parentElement;
        target.classList.add("active");
        target.previousElementSibling.classList.remove("active");
        
    }

    
    return(
        <div className ="navBar">
            <div className="wrapper">
            <h1>
                <Link to='/' className="logo logoAdmin">BLACK ROSE LUXE<span className="span">.</span></Link>
            </h1>
                <div className = "navLinks">
                    {/* <ul>
                        <li onClick={showAllBooks} className=""><Link to = '/allbooks'>All Books</Link></li>
                        <li onClick={showLoanBooks}><Link to = '/loanedbooks'>Loan Books</Link></li>
                        <li><a href="#@">recieve books</a></li>
                    </ul> */}
                </div>
                <Search />
            </div>
        </div>
    )
}
export default AdminNav;
