import React from 'react';
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input, TextField } from '@material-ui/core';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2kci3ph', 'template_3bezrgm', e.target, 'user_Vk8nUBq1NqqxNXtLLROy0')
      .then((result) => {
        alert(result.text);
      }, (error) => {
        alert(error.text);
      });
  }

  return (
    <div className="formContainer">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <FormControl>
          <InputLabel>
            Name
          </InputLabel>
          <Input name="user_name" type="text" placeholder="name" />
        </FormControl>
        <FormControl>
          <InputLabel>
            Email
          </InputLabel>
          <Input name="user_email" type="email" placeholder="email" />
        </FormControl>
        <FormControl>
          <TextField
            id="filled-multiline-static"
            label="message"
            multiline
            rows={4}
            name="message"
          />
        </FormControl>
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
    </div>
  );
}