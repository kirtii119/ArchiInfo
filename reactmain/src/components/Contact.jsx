import React from 'react';

function Contact() {
  return (
    <div className='w3-container w3-padding-32 w3-margin w3-margin-right' id='contact'>
      <h3 className='w3-border-bottom w3-border-light-grey w3-padding-16'>Contact</h3>
      <p>Lets get in touch and talk about your next project.</p>
      <form action='mailto:kirtiagarwal20@vit.edu ' method='post' encType='text/plain'>
        <input className='w3-input w3-border' type='text' placeholder='Name' required name='Name' />
        <input
          className='w3-input w3-section w3-border'
          type='email'
          placeholder='Email'
          required
          name='Email'
        />
        <input
          className='w3-input w3-section w3-border'
          type='text'
          placeholder='Subject'
          required
          name='Subject'
        />
        <input
          className='w3-input w3-section w3-border'
          type='text'
          placeholder='Comment'
          required
          name='Comment'
        />
        <button className='w3-button w3-black w3-section' type='submit'>
          <i className='fa fa-paper-plane'></i> SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Contact;
