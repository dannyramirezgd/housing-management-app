import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const EmailForm = () => {
  const form = useRef();
  console.log(form)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n14tqlb',
        'template_3um17v8',
        form.current,
        '0gvWyx6zur9zJ2n3b',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>First Name</label>
      <input type="text" name="user_firstName" />
      <label>Last Name</label>
      <input type="text" name="user_lastName" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <input type="submit" value="send" />
    </form>
  );
};
