import React, { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButtonImage from './img/google-logo-9808.png'
import FBButtonImage from './img/logo-facebookpng-32257.png'
import FoodImageOne from '../../staticImage/images/hero-banner-bg.png'
import FoodImageTwo from '../../staticImage/images/background4.png'
import { auth } from '../../Request'
import useLocalStorage from '../../UseLocalStorage'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useLocalStorage('user')

    const data = {
        "email": email,
        "password": password
    }
    const submitLogin = (e) => {
        e.preventDefault()
        sendData()
    }
    const sendData = async() => {
        const res = await auth('/auth/login', data);
        (res.status === 200 && res.data?.user) && setUser(res?.data)
        if(res.status === 200){
            
            window.location.pathname = ''
            window.location.reload('')
        }
    }
  return (
    <div className='auth'>
        <figure className="hero-banner">
            <img src={FoodImageOne} width="820" height="716" alt="" aria-hidden="true"
            className="w-100 hero-img-bg" />

            <img src={ FoodImageTwo } width="700" height="637" loading="lazy" alt="export"
            className="w-100 hero-img" />
        </figure>
        <div className='auth_form'>
            <div className='title'>Login</div>
            <form onSubmit={submitLogin}>
                <input type='text' className='auth_form_input' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' className='auth_form_input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <span><Link className='blue_link forgot_password_link' to="/forgot-password">Forgot password?</Link></span>
                <input type='submit' className='auth_form_input auth_form_submit' value="Log In" />
                <div className='auth_or'>OR</div>
                <div className='google_login_button'><img className='auth_button_image' src={GoogleButtonImage} alt="google login button" /> Login with google</div>
                <div className='google_login_button'><img className='auth_button_image' src={FBButtonImage} alt="facebook login button" /> Login with facebook</div>

                <span>You don't have an account?<Link className='auth_method_link blue_link' to="/register">click here</Link> to register</span>
            </form>
        </div>
    </div>
  )
}

export default Login
