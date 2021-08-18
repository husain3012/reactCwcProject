import React from "react";

const CtaSection = () => {
  return (
    <div className="moon-mist-background wealth-section-space get-started-with-ease">
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
                <img className="img-fluid" alt="Orange streak" src="https://asset10.scripbox.com/assets/invest/wealth-home/orange-streak-71624a439a206dbb0590dd9d44431b81456c7d257725df7a79a417c88a6f2c97.png" />
              </span>
            </h2>
            <div className="wealth-section-description my-26">
              Or rather, with eCAS. The brand name Portfolio Audit will analyse your existing investments and recommend the best action for your portfolio. For free. All you need to do is to upload your eCAS statement!
            </div>
            <a
              className="sb-primary-cta-button trigger-event"
              data-action="Get started"
              data-category="conversion"
              data-label="Get started"
              data-properties='{"action": "Get started", "location": "home"}'
              href="https://scripbox.com/user/login?invest_redirect_path=%2Fgenerate-ecas%3FskipDefaultEmail%3D1"
              rel="nofollow"
            >
              Get Started
            </a>
            <p className="mt-20">
              Don't have an eCAS.
              <a className="sb-blue-link trigger-event" data-action="Ecas signup" data-category="conversion" data-label="Signup here" data-properties='{"action": "Ecas signup", "location": "home"}' href="https://scripbox.com/user/login">
                Signup here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
