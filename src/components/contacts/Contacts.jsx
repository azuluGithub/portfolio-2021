//npm packages
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaEnvelope, FaLocationArrow, FaLinkedin, FaGithub } from  "react-icons/fa";

//local packages
import './Contacts.css';

//email component
const Contacts = () => {

    const formRef = useRef();
    const [ msg, setMsg ] = useState('');

    
    const [ user_name, setUsername ] = useState('');
    const [ user_email, setUserEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ user_subject, setUserSubject ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const clearState = () => {
        setMessage('');
        setUserEmail('');
        setUsername('');
        setUserSubject('');
    }

    const sendEmail = (e) => {

        e.preventDefault();
        if (!user_email || !user_name || !user_subject || !message) {
            return ;
        }
        
        setIsLoading(true);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
          .then((result) => {
            clearState();
            setMsg(result.text);
          }, (error) => {
            setMsg(error.text);
          });
          
        formRef.current.reset();
        setIsLoading(false);
      };

    //clear message after 4 sec
    setTimeout(() => {
        msg && setMsg('');
    }, 4000);

    //disable button when loading
    const isButtonDisabled = loading => loading ? 'form-button-disabled' : 'form-button';

    return (
        <div className='contacts' id="contacts">
            <div className="contacts-heading">
                <span className='contacts-heading-left'></span>
                <span className='contacts-heading-right'></span>
            </div>
            <div className="contacts-wrapper">
                <div className="contacts-left">
                    <div className="contacts-inner-box">
                        <p className='contacts-left-heading'>Get in touch...</p>
                        <div className='contact-left-box'>
                            <FaLinkedin className='contact-icon contact-linkedin' />
                            <a href="https://www.linkedin.com/in/arnold-zulu-532539150" target="_blank" rel="noreferrer" className='contact-label'>LinkedIn</a>
                        </div>
                        <div className='contact-left-box'>
                            <FaGithub className='contact-icon contact-github' />
                            <a href="https://github.com/azuluGithub" target="_blank" rel="noreferrer" className='contact-label'>GitHub</a>
                        </div>
                        <div className='contact-left-box'>
                            <FaEnvelope className='contact-icon contact-mail' />
                            <span className='contact-label'>zuluarnold0@gmail.com</span>
                        </div>
                        <div className='contact-left-box'>
                            <FaPhoneAlt className='contact-icon contact-phone' />
                            <span className='contact-label'>+27 73 234 8105</span>
                        </div>
                        <div className='contact-left-box'>
                            <FaLocationArrow className='contact-icon contact-address' />
                            <span className='contact-label'> Soweto, Johannesburg, 1754</span>
                        </div>
                    </div>
                </div>
                <div className="contacts-right">
                    {
                        (msg === 'OK') ? <p className='success-msg'>Your message was sent successfully</p>
                            : <p className='error-msg'>{ msg }</p>
                    }
                    <p className="contacts-right-message">
                        Send me an <strong>email.</strong>
                    </p>
                    <form ref={formRef} onSubmit={sendEmail} className='form'>
                        <label className='form-label'>Name:</label>
                        <input 
                            type="text" 
                            name="user_name" 
                            className="form-input" 
                            placeholder=''
                            value={user_name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className='form-label'>Email:</label>
                        <input 
                            type="text" 
                            name="user_email" 
                            className="form-input" 
                            placeholder=''
                            value={user_email}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <label className='form-label'>Subject:</label>
                        <input 
                            type="text" 
                            name="user_subject" 
                            className="form-input" 
                            placeholder=''
                            value={user_subject}
                            onChange={(e) => setUserSubject(e.target.value)}
                        />
                        <textarea  
                            name="message"
                            value={message}
                            id="form-text-area" 
                            className="form-text-area"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                            className={isButtonDisabled(isLoading)}
                            type="submit"
                            disabled={isLoading}
                        > SUBMIT </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
