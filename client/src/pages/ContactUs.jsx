import React, { useState } from "react";
import { validateEmail, validateInput } from "../../utils/helpers";


const ContactUs = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorEmail && !errorName && !errorMsg) {
      console.log("Submit Form", formState);
    }
  };

  const handleNameChange = (e) => {
    if (e.target.name === "name") {
      const isValid = validateInput(e.target.value);
      if (!isValid) {
        setErrorName(`${e.target.name} is required`);
      } else {
        setErrorName("");
      }
    }
    if (!errorName) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorEmail("Email is invalid. Try Again!");
      } else {
        setErrorEmail("");
      }
    }
    if (!errorEmail) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const handleMsgChange = (e) => {
    if (e.target.name === "message") {
      const isValid = validateInput(e.target.value);
      if (!isValid) {
        setErrorMsg(`${e.target.name} is required`);
      } else {
        setErrorMsg("");
      }
    }
    if (!errorName) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const backHome = () => {
    window.location.reload("/");
  };

  return (
    <section>
      <h1 className="is-size-3-mobile is-size-3 has-text-centered mt-3">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="control has-icons-left">
              <input className={errorName ? "input is-danger" : "input"} type="text" name="name" defaultValue={name} placeholder="name" onBlur={handleNameChange} />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-user"></i>
              </span>
            </div>
            {errorName && <p className="help is-danger">Name is required</p>}

            <label className="label mt-1" htmlFor="email">
              Email
            </label>
            <div className="control has-icons-left">
              <input className={errorEmail ? "input is-danger" : "input"} type="email" name="email" defaultValue={email} placeholder="email" onBlur={handleEmailChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            {errorEmail && <p className="help is-danger">This email is invalid</p>}

            <label className="label mt-1" htmlFor="message">
              Message
            </label>
            <div className="control">
              <textarea className={errorMsg ? "textarea is-danger" : "textarea"} name="message" defaultValue={message} placeholder="Textarea" onBlur={handleMsgChange}></textarea>
            </div>
            {errorMsg && <p className="help is-danger">Message is required</p>}

            <div className="field is-grouped pt-3">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light" onClick={backHome}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
