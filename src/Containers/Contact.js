import React, { useState } from "react";
import PageTitle from "../Components/PageTitle";
import { ContactWr } from "../styles/ContactWr";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setname] = useState("");
  const [inpName, setinpName] = useState("");
  const [email, setemail] = useState("");
  const [inpEmail, setinpEmail] = useState("");
  const [number, setnumber] = useState("");
  const [inpNumber, setinpNumber] = useState("");
  const [topic, settopic] = useState("");
  const [inpTopic, setinpTopic] = useState("");
  const [message, setmessage] = useState("");
  const [inpMessage, setinpMessage] = useState("");

  const checkName = () => {
    if (inpName === "") {
      setname("Please write your name");
    } else {
      setname("");
    }
  };
  const checkEmail = () => {
    if (inpEmail === "") {
      setemail("Please write your email");
    } else {
      setemail("");
    }
  };
  const checkNumber = () => {
    if (inpNumber === "") {
      setnumber("Please write your number");
    } else {
      setnumber("");
    }
  };
  const checkTopic = () => {
    if (inpTopic === "") {
      settopic("Please write the Topic of your Message");
    } else {
      settopic("");
    }
  };
  const checkMessage = () => {
    if (inpMessage === "") {
      setmessage("Please write the Message");
    } else {
      setmessage("");
    }
  };
  const CheckInfo = () => {
    checkName();
    checkEmail();
    checkNumber();
    checkTopic();
    checkMessage();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_cyxjqeq",
        "template_4f55shk",
        e.target,
        "user_LNfzahvYSrS34hADTpz3P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactWr id="contact">
      <div className="container">
        <PageTitle title="CONTACT" />
        <div className="content">
          <form className="row" onSubmit={sendEmail}>
            <div className="col-lg-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={(e) => {
                  setinpName(e.target.value);
                }}
              />
              <label>{name}</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                onChange={(e) => {
                  console.log(e);
                  setinpEmail(e.target.value);
                }}
              />
              <label>{email}</label>
              <input
                type="text"
                name="user_number"
                placeholder="Your Number"
                onChange={(e) => {
                  setinpNumber(e.target.value);
                }}
              />
              <label>{number}</label>
              <input
                type="text"
                placeholder="Topic"
                onChange={(e) => {
                  setinpTopic(e.target.value);
                }}
              />
              <label>{topic}</label>
            </div>
            <div className="col-lg-6">
              <textarea
                type="text"
                name="message"
                rows="5"
                placeholder="Message"
                onChange={(e) => {
                  setinpMessage(e.target.value);
                }}
              />
              <label>{message}</label>
            </div>
            <div className="col-12">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </ContactWr>
  );
};

export default Contact;
