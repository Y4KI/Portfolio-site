import React from "react";
import PageTitle from "../Components/PageTitle";
import { ContactWr } from "../styles/ContactWr";

const Contact = () => {
  return (
    <ContactWr id="contact">
      <div className="container">
        <PageTitle title="CONTACT" />
        <div className="content">
          <form className="row">
            <div className="col-lg-6">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="user_email" placeholder="Your email" />
              <input type="text" name="user_number" placeholder="Your Number" />
              <input type="text" placeholder="Topic" />
            </div>
            <div className="col-lg-6">
              <textarea
                type="text"
                name="message"
                rows="5"
                placeholder="Message"
              />
            </div>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </ContactWr>
  );
};

export default Contact;
