import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="turquoise-background wealth-section-space get-started-with-ease">
      <div className="container">
        <div className="row d-flex">
          <div className="col-12 col-md-6">
            <img className="img-fluid" alt=" brandname mobile app showcase" src="https://asset10.scripbox.com/assets/invest/wealth-home/app-showcase-d51085300ad175b83825568b0d131c22181e26ac0741f605017d8c6aa9217a2c.png" />
          </div>
          <div className="col-12 col-md-6 align-self-center">
            <h2 className="h2-wealth-title">
              Get started with
              <span className="wealth-streak-word">
                ease!
              </span>
            </h2>
            <div className="wealth-section-description my-26">
              Or rather, with eCAS. The brand name Portfolio Audit will analyse your existing investments and recommend the best action for your portfolio. For free. All you need to do is to upload your eCAS statement!
            </div>
            <Link
              className="sb-primary-cta-button trigger-event"
              to="/signup"
            >
              Get Started
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
