import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import User from '../../assets/icons/user-icon.svg';
import Email from '../../assets/icons/email-icon.svg';
import Message from '../../assets/icons/message-icon.svg';
import ContactCat from '../../assets/images/contact-me.png';

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
        <section className="container mx-auto p-16">

          <h2 className="animate-bounce text-5xl z-40 text-white text-red-300 h-16 mx-auto flex justify-center">Contact me!</h2>

          <img src={ContactCat} className="w-96 h-100 mx-auto pb-10" alt="Cartoon shouting Cat"/>

          <form onSubmit={handleSubmit} className="border-solid border-2 border-red-300 rounded-lg">

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mt-6 mx-6">
                <img src={User} className="w-8 h-10 mx-2" alt="user icon"/>
                <TextField id="input-name" fullWidth label="Name" variant="outlined" onChange={handleChange} onBlur={handleChange}/>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mt-6 mx-6">
                <img src={ Email } className="w-8 h-10 mx-2" alt="email icon"/>
                <TextField id="input-email" fullWidth label="Email" variant="outlined" onChange={handleChange} onBlur={handleChange}/>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="mt-6 mx-6">
                <img src={ Message } className="w-8 h-10 mx-2" alt="message icon"/>
                <TextField id="input-message" fullWidth multiline label="Message" variant="outlined" rows={5} onChange={handleChange} onBlur={handleChange}/>
            </Box>
            {message && (
          <div>
            <p className="error-text text-red-300 px-5">{message}</p>
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