import React from "react";
import Card from "./Card";
import Api from "./Api";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center service-heading">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Api.map((element) => {
                return (
                  <>
                    <Card imgsrc={element.imgsrc} title={element.title} textsrc={element.textsrc} link = {element.link} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
