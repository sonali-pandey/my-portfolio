import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import User from '../../icons/user-icon.svg';
import Email from '../../icons/email-icon.svg';
import Message from '../../icons/message-icon.svg';
import ContactCat from '../../icons/contact-me.png';

import { validateEmail } from '../../utils/helper';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');

    function handleChange(event) {
        //When input selected is email
        if (event.target.name === 'email') {
          //check email validity
          const isValid = validateEmail(event.target.value);
          console.log(isValid);
          // isValid conditional statement and set message
          if(!isValid) {
            setMessage('Your email is invalid.');
          } else {
            setMessage('');
          }
        } else {
          //If form is left blank
          if (!event.target.value.length) {
            setMessage(`${event.target.name} is required.`);
          } else {
            setMessage('');
          }
        }
        //Console log error message
        console.log('Message: ', message);
    
        if (!message) {
          setFormState({ ...formState, [event.target.name]: event.target.value });
        }
      };

    function handleSubmit (event) {
        event.preventDefault();
        if (!message) {
          //Console logs the input
          console.log(formState);
          //Resets the form
          event.target.reset();
        } else {
          console.log('Message: ', message);
        }
      };

    return(
        <section className="w-96 h-100 mx-auto pt-20 pb-10">
          <h2 className="animate-bounce text-5xl z-40 text-white text-red-300 h-16 mx-auto">Contact me!</h2>

          <img src={ContactCat} className="w-96 h-100 mx-auto pb-10"/>
          <form id="contact-form" onSubmit={handleSubmit} className="border-solid border-2 border-red-300 px-4 rounded-lg">
            <div className="mt-6">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <img src={User} className="w-8 h-10 mx-2"/>
                <TextField id="input-name" fullWidth label="Name" variant="outlined" onChange={handleChange} onBlur={handleChange}/>
            </Box>
            </div>
            <div className="mt-6">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <img src={ Email } className="w-8 h-10 mx-2"/>
                <TextField id="input-email" fullWidth label="Email" variant="outlined" onChange={handleChange} onBlur={handleChange}/>
            </Box>
            </div>
            <div className="mt-6">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <img src={ Message } className="w-8 h-10 mx-2"/>
                <TextField id="input-message" fullWidth multiline label="Message" variant="outlined" rows={5} onChange={handleChange} onBlur={handleChange}/>
            </Box>
            </div>
            {message && (
          <div>
            <p className="error-text">{message}</p>
          </div>
        )}
            <div className="px-20">
            <button type="submit" className="my-6 px-6 col-start-2 grid-cols-3 rounded-full py-3 px-6 font-bold text-white bg-green-300 transform hover:scale-110 hover:text-green-600 hover:border-green-600">Submit</button>
            </div>
          </form>
        </section>  
      );
}

export default Contact;