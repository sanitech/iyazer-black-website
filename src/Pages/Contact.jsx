import React from "react";
import "../Assets/contact.css";
import Footer from "../Components/Footer";
const Contact = () => {
  return (
    <div>
      <div className="container">
        <form className="form">
          <h2>Contact Form</h2>
          <div className="input-row">
            <div className="row ">
              <label for="">First name</label>
              <input type="text" name="" id="" placeholder="" />
            </div>
            <div className="row">
              <label for="">Last name</label>
              <input type="text" name="" id="" placeholder="" />
            </div>
          </div>

          <div className="row">
            <label for="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="row">
            <label for="">Phone</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="row">
            <label htmlFor="">Message</label>
            <textarea
              className="form-control message"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write something here"
            ></textarea>
          </div>

          <button className="btn-sign">Submit</button>
          <div className="accept"></div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
