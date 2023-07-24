import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [name, setName] = useState('');
        const [subject, setSubject] = useState('');
        const form = useRef();
        const data = {

        }
        const submitForm = (e) => {
                e.preventDefault();
                sendUser()
        }

        const sendUser = async() => {
                const res = await emailjs.sendForm('service_s5zljkr', '180b7d2dff18a9c0d01ca4264aeba026', form.current, 'user_32oPl5e2EBX4S9r5xcHo9')
                .then((result) => {
                        console.log(result.text);
                }, (error) => {
                        console.log(error.text);
                });

                console.log('====================');
                console.log(res);
        }
        
  return (
        <div className='contact_page_wrapper'>
                <div className='contactus_page'>
                        <div className='contact_header'>
                                <h3>Contact us</h3>
                                <p>Send us a message</p>
                        </div>
                        <div className='contact_form'>
                                <form ref={form} className='authForm' onSubmit={submitForm}>
                                        <input type='text' className='auth_form_input' placeholder='Name' name="name" value={name} onChange={e => setName(e.target.value)} />
                                        <input type='email' className='auth_form_input' placeholder='Email' email="email" value={email} onChange={e => setEmail(e.target.value)} />
                                        <input type='text' className='auth_form_input' placeholder='Subject' subject="subject" value={subject} onChange={e => setSubject(e.target.value)} />
                                        <textarea placeholder='Message' cols={6} className='auth_form_input auth_form_input_textarea' name='message' value={message} onChange={e=> setMessage(e.target.value)}>

                                        </textarea>
                                        <input type='submit' className='auth_form_input auth_form_input_submit' value='Submit' />
                                
                                </form>
                        </div>
                </div>
        </div>
  )
}

export default Contact
