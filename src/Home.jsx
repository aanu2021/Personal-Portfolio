import React from "react";
import Common from "./Common";
import rocket from "./images/rocket.jpg";

const Home = () => {
  return (
    <>
      <Common
        text={
          <h1>
            Grow your business with
            <strong className="brand-name"> Anumoy Nandy</strong>
          </h1>
        }
        imgsrc={rocket}
      />
    </>
  );
};

export default Home;
