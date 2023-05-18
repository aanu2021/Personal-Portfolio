import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Feedback = () => {
  const location = useLocation();
  const fullName = location.state.fullName;
  const email = location.state.email;

  return (
    <>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            Thanks for choosing us <span className="contact-heading">{fullName}</span>
          </h1>
          <p className="col-md-8 fs-4">
            Your eagerness will definitely be entertained by us very soon. Once
            we are done with the processes, we will contact you through your
            mail <strong className="text-heading">{email}</strong>. Till then
            Happy Coding 😊.
          </p>
          <NavLink to="/services" className="btn-get-started extra-padding">
             Explore Other Services
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Feedback;
