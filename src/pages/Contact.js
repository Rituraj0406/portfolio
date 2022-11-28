import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { urname, emailAddress, msg, contact, contactForm } from '../Const/text';


const SERVICE_ID = "service_d9muqiu";
const TEMPLATE_ID = "template_ot9cf9f";
const USER_ID = "71hPGwgPyD7ZjaqWV";

function Contact() {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message sent Successfully',
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, Something went wrong',
        type: error.text,
      });
    });
    e.target.reset();
  };
  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black underline uppercase ">
            {contactForm}
          </h1>
          <form className="mt-6" onSubmit={handleOnSubmit}>
            <div className="mb-6">
              <label>
                <span className="text-gray-700">{ urname }</span>
                <input
                  id='form-input-control-name'
                  type="text"
                  name="name"
                  className="
                  w-full
                  block px-16 py-2 mt-2
                  border
                  rounded-md
                  shadow-md
                  focus:ring
                  outline-none
                  focus:ring-opacity-50"
                  placeholder="Enter Name"
                />
              </label>
            </div>
            <div className="mb-6">
              <label>
                <span className="text-gray-700">{ emailAddress }</span>
                <input
                  id='form-input-control-email'
                  name="email"
                  type="email"
                  className="
                  w-full
                  block px-16 py-2 mt-2
                  border
                  rounded-md
                  shadow-md
                  focus:ring
                  outline-none
                  focus:ring-opacity-50"
                  placeholder="Enter Email"
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label>
                <span class="text-gray-700">{msg}</span>
                <textarea
                  name="message"
                  className="
                  w-full
                  block px-16 py-2 mt-2
                  border
                  rounded-md
                  shadow-md
                  focus:ring
                  outline-none
                  focus:ring-opacity-50"
                  rows="5"
                ></textarea>
              </label>
            </div>

            <div class="mb-6">
              <button
                type="submit"
                className="
                  h-10
                  px-5
                  text-white
                  bg-black
                  font-bold
                  rounded-lg
                  transition-colors
                  duration-150
                  focus:shadow-outline"
              >
                {contact}
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
