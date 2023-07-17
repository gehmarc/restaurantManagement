import React, { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import GoogleButtonImage from './img/google-logo-9808.png'
import FBButtonImage from './img/logo-facebookpng-32257.png'
import FoodImageOne from '../../staticImage/images/hero-banner-bg.png'
import FoodImageTwo from '../../staticImage/images/background4.png'
// import { ReactComponent as FacebookLogin } from "./img/Facebook-f_Logo-Blue-Logo.wine.svg";

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [toggleShowPassword, setToggleShowPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLogin = () => {

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
            <div className='title'>Register</div>
            <form onSubmit={submitLogin}>
                <input type='text' className='auth_form_input' placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)} />
                <input type='text' className='auth_form_input' placeholder='User Name' value={userName} onChange={e => setUserName(e.target.value)} />
                <input type='text' className='auth_form_input' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <div className='passwordInputWrapper'>
                    <input type={toggleShowPassword ? 'text': 'password'} className='auth_form_input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <span className='eye_view' onClick={() => setToggleShowPassword(!toggleShowPassword)}>{ !toggleShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }</span>
                </div>
                <span><Link className='blue_link forgot_password_link' to="/forgot-password">Forgot password?</Link></span>
                <input type='submit' className='auth_form_input auth_form_submit' value="Register" />
                <div className='auth_or'>OR</div>
                <div className='google_login_button'><img className='auth_button_image' src={GoogleButtonImage} alt="google login button" /> Login with google</div>
                <div className='google_login_button'><img className='auth_button_image' src={FBButtonImage} alt="facebook login button" /> Login with facebook</div>

                <span>You already have an account?<Link className='auth_method_link blue_link' to="/login">click here</Link> to login</span>
            </form>
        </div>
    </div>
  )
}

export default Register
