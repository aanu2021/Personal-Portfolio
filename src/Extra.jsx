import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./extra.css";

const Extra = () => {

  const [item, setItem] = useState({
    fullName: "",
    contact: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setItem((oldItem) => {
      return {
        ...oldItem,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    navigate("/feedback", {
      state: {
        fullName: item.fullName,
        contact: item.contact,
        email: item.email,
        message: item.message,
      },
    });
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p>
                    Have any doubts, regarding anything feel free to contact
                    with me by filling the form up.
                  </p>
                  <p>
                    <img
                      src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg"
                      alt="img"
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    id="contactForm"
                    name="contactForm"
                    onSubmit={formSubmit}
                  >
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          onChange={inputEvent}
                          value={item.fullName}
                          id="name"
                          placeholder="Your name"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          onChange={inputEvent}
                          value={item.email}
                          id="email"
                          placeholder="Email"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="contact"
                          onChange={inputEvent}
                          value={item.contact}
                          id="subject"
                          placeholder="Contact No."
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          onChange={inputEvent}
                          value={item.message}
                          id="message"
                          cols="30"
                          rows="20"
                          placeholder="Leave your message here"
                          autoComplete="off"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn-get-started"
                        />
                        <span className="submitting"></span>
                      </div>
                    </div>
                  </form>
                  <div id="form-message-warning mt-4"></div>
                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
