import React, { useState } from "react";
import PageTitle from "../Components/PageTitle";
import { ContactWr } from "../styles/ContactWr";
import { Fade } from "react-awesome-reveal";
import {
  errorChecker,
  formData,
  inputModel,
  messageData,
} from "../data/ContactData";

const Contact = () => {
  const [form, setForm] = useState(formData);
  const [message, setMessage] = useState(messageData);

  const CheckInfo = () => {
    errorChecker(form, setForm);
    errorChecker(message, setMessage);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    CheckInfo();
  };

  return (
    <ContactWr id="contact">
      <div className="container">
        <PageTitle title="CONTACT" />
        <Fade className="content">
          <form className="row" onSubmit={sendEmail}>
            <div className="col-lg-6 p-0">
              {form.map((e, idx) => (
                <>
                  <input
                    type={e.fieldType}
                    name={"user_" + e.fieldFor}
                    placeholder={"Your " + e.fieldFor}
                    value={e.fieldModel}
                    onChange={(e) => inputModel(e, idx, { form, setForm })}
                  />
                  <label>{e.fieldError}</label>
                </>
              ))}
            </div>
            <div className="col-lg-6">
              {message.map((e, idx) => (
                <>
                  <textarea
                    rows="5"
                    type={e.fieldType}
                    name={"user_" + e.fieldFor}
                    placeholder={"Your " + e.fieldFor}
                    value={e.fieldModel}
                    onChange={(e) =>
                      inputModel(e, idx, {
                        name: message,
                        function: setMessage,
                      })
                    }
                  />
                  <label>{e.fieldError}</label>
                </>
              ))}
            </div>
            <div className="col-12 p-0">
              <button>SEND</button>
            </div>
          </form>
        </Fade>
      </div>
    </ContactWr>
  );
};

export default Contact;
