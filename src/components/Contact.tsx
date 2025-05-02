import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // State for validation errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // Form reference for emailjs
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Validate fields
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
        var templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID!
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            }
        );

        // Clear form after successful submission
        setName('');
        setEmail('');
        setMessage('');
    }
  };

  // Handle input changes
  const handleNameChange = (e: any) => {
    setName(e.target.value);
    if (e.target.value !== '') setNameError(false);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
    if (e.target.value !== '') setEmailError(false);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
    if (e.target.value !== '') setMessageError(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                defaultValue={"First Last"}
                placeholder="What's your name?"
                value={name}
                onChange={handleNameChange}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  readOnly: false
                }}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  readOnly: false
                }}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={handleMessageChange}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                readOnly: false
              }}
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              type="submit"
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;