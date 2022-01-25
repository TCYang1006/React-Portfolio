import React, { useState } from 'react';
import { validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
  
    return (
      <section>

        <div>
          <h3 className='row'>Personal Contact Info:</h3>
            <h5 className='row'>Tongchee Y. Yang</h5>
            <h6 className='row'>email:  Tcknyaj@gmail.com</h6>
            <h6 className='row'>Phone: (317)523-5142</h6>
        </div>
      </section>
    );
  }
  
  export default ContactForm;
