import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Success from "./success";

const Form = () => {
  const inputEntry = {
    user_name: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(inputEntry);

  const [validationError, setValidationError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [successMessageData, setSuccessMessageData] = useState('');

  const handelInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setValidationError(validateForm(formValues));
    setIsSubmit(true);

    formValues?.user_name !== "" && formValues?.message !== ""
      ? 
      emailjs
          .sendForm(
            "service_e6dlqxd",
            "template_oq4bxwb",
            form.current,
            "c0P4w8C8tFn1UkvrE"
          )
          .then(
            (result) => {
              console.log(result.text);
              successMessage.style.display = "block";
              setSuccessMessageData(
                `Success! Thank you, ${formValues?.user_name}, for your kind response 🙂, Will get back to you.`
              );
              setFormValues({ user_name: '', message: '' });
            },
            (error) => {
              console.log(error.text);
            }
          )
      : null;
  };

  const validateForm = (values) => {
    const error = {};

    if (!values?.user_name) {
      error.user_name = "Name is required !";
    }
    if (!values?.message) {
      error.message = "Description is required !";
    }
    return error;
  };
  return (
    <div>
      <Success successMessage={"successMessage"} successMessageData={successMessageData} />
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="flex items-center border-b border-gray-500 py-2 mb-6">
          <input
            className="appearance-none bg-black border-none w-full text-gray-200 mr-3 py-1 px-2 focus:outline-none"
            type="text"
            placeholder="Full Name * "
            name="user_name"
            autoComplete="off"
            value={formValues?.user_name}
            onChange={handelInput}
          />
          <p className="text-xs text-red-700 w-full m-0 text-end">
            {validationError?.user_name}
          </p>
        </div>
        <div className="flex items-center border-b border-gray-500 py-2 mb-6">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email"
            name="user_email"
            autoComplete="off"
          />
        </div>
        <div className=" items-center border-b border-gray-500 py-2 mb-6">
          <textarea
            className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Description *"
            name="message"
            autoComplete="off"
            value={formValues?.message}
            onChange={handelInput}
          />
          <p className="text-xs text-red-700 w-full m-0 text-end">
            {validationError?.message}
          </p>
        </div>
        <div className="flex items-center py-2">
          <button
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            value="Send"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
