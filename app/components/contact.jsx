import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mrgnkayz");
  if (state.succeeded) {
    return (
      <div id='contact' className="contact">
        <p>Thanks for joining!</p>
      </div>

    );
  }
  return (

    <div id='contact' className="contact">
      <h1 className="subpage-title">Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
