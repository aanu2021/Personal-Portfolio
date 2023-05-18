import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              {props.textsrc}
            </p>
            <NavLink to="/contact" className="btn-get-started">
               Contact Us
            </NavLink>
            <a href={props.link} target="_b" className="btn-get-started">View</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
