import React from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileCardAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prevValue) => !prevValue);
    console.log(isOpen);
  };
  return (
    <div className="scripbox-offering-card mb-20 pointer-cursor">
      <div onClick={toggleOpen} className="home-offering-collapse-header" id="wealth-heading-0">
        <div aria-controls="wealth-offering-0" aria-expanded="true" className="p-20 text-left" data-target="#wealth-offering-0" data-toggle="collapse">
          <div className="d-flex flex-row pt-20 pb-10 align-items-start">
            <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
            <div className="d-flex">
              <svg height="52px" width="52px">
                <use xlinkHref={props.iconSvg}></use>
              </svg>
            </div>
            <p className="offering-title px-6 ma-0 w-100">{props.heading}</p>
            <div className="arrow-down flex-shrink-1 px-12">
              <svg className="home-svg-sprite" height="40px" width="40px">
                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-labelledby="wealth-heading-0" className={"collapse" + (isOpen ? "show" : "")} data-parent="#wealth-offering-faq-accordion" id="wealth-offering-0">
        <div className="pl-58">
          <div className="pt-2">
            <p className="offering-description text-black m-0">{props.subheading}</p>
          </div>
          <div className="offering-donut-chart-container px-16 pt-30">
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex">
                <svg className="img-fluid donut-container">
                  <use xlinkHref={props.svg}></use>
                </svg>
              </div>
            </div>
          </div>
          <div className="py-30">
            <Link className="sb-blue-link trigger-event" to={props.link}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileCards = () => {
  return (
    <div className="row d-flex d-md-none wealth-offering-mobile">
      <div className="col-12">
        <div className="accordion" id="wealth-offering-faq-accordion" itemProp="mainEntity" itemScope="" itemType="https://schema.org/Question">
          <MobileCardAccordion 
          heading="Core Mutual Fund Portfolio" 
          subheading="Inflation-beating growth with equity funds"
          link="/solutions/solution1"
           />
            <MobileCardAccordion 
          heading="Retire Confident" 
          subheading="hoicpaoc ao ihdi k jlka po a"
          link="/solutions/solution2"
           />
            <MobileCardAccordion 
          heading="Lorem Ipsum1" 
          subheading="hoicpaoc ao ihdi k jlka po a"
          link="/solutions/solution3"
           />
        </div>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <div className="wealth-section-space wealth-scripbox-offerings">
      <div className="container">
        <div className="row d-flex">
          <div className="col-12">
            <div className="sb-tag sb-offerings mb-12">Solution</div>
            <h2 className="wealth-section-title mb-6">We match your objectives to the right portfolio</h2>
            <p className="wealth-section-description">Go after all that matters to you.</p>
          </div>
        </div>
        <div className="row d-none d-md-flex scripbox-offering-cards-container">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
            <Link
              className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
              data-action="Offering Learn more"
              data-category="conversion"
              data-label="Learn more"
              data-properties='{"action": "Offering Learn more", "offering": "core_mutual_fund_portfolio"}'
              to="/solutions/solution1"
              rel="nofollow"
            >
              <div className="card-body px-0">
                <div className="pt-2 pl-6">
                  <svg height="56px" width="56px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-core-mutual-fund-portfolio"></use>
                  </svg>
                </div>
                <div className="feature-content-section">
                  <div className="d-flex flex-row">
                    <div className="d-flex">
                      <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                    </div>
                    <div className="d-flex flex-column px-16">
                      <p className="offering-title">Core Mutual Fund Portfolio</p>
                      <p className="offering-description text-black m-0">Inflation-beating growth with equity funds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="offering-donut-chart-container pb-50">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <img src="/assets/piechart1.svg" alt="svg" className="img-fluid donut-container" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
            <Link
              className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
              data-action="Offering Learn more"
              data-category="conversion"
              data-label="Learn more"
              data-properties='{"action": "Offering Learn more", "offering": "retire_confident"}'
              to="/solutions/solution2"
              rel="nofollow"
            >
              <div className="card-body px-0">
                <div className="pt-2 pl-6">
                  <svg height="56px" width="56px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-retire-confident"></use>
                  </svg>
                </div>
                <div className="feature-content-section">
                  <div className="d-flex flex-row">
                    <div className="d-flex">
                      <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                    </div>
                    <div className="d-flex flex-column px-16">
                      <p className="offering-title">Retire Confident</p>
                      <p className="offering-description text-black m-0">Plan and invest for hassle-free sunset years</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="offering-donut-chart-container pb-50">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <svg className="img-fluid donut-container">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#retire-confident"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
            <Link
              className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
              data-action="Offering Learn more"
              data-category="conversion"
              data-label="Learn more"
              data-properties='{"action": "Offering Learn more", "offering": "cash_management_plan"}'
              to="/solutions/solution3"
              rel="nofollow"
            >
              <div className="card-body px-0">
                <div className="pt-2 pl-6">
                  <svg height="56px" width="56px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-cash-management"></use>
                  </svg>
                </div>
                <div className="feature-content-section">
                  <div className="d-flex flex-row">
                    <div className="d-flex">
                      <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                    </div>
                    <div className="d-flex flex-column px-16">
                      <p className="offering-title">Cash Management</p>
                      <p className="offering-description text-black m-0">Grow your "extra" cash with Liquid funds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="offering-donut-chart-container pb-50">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <svg className="img-fluid donut-container">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#cash-management"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
            <Link
              className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
              data-action="Offering Learn more"
              data-category="conversion"
              data-label="Learn more"
              data-properties='{"action": "Offering Learn more", "offering": "tax_saver_plan"}'
              to="/solutions/solution4"
              rel="nofollow"
            >
              <div className="card-body px-0">
                <div className="pt-2 pl-6">
                  <svg height="56px" width="56px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-tax-saver-plan"></use>
                  </svg>
                </div>
                <div className="feature-content-section">
                  <div className="d-flex flex-row">
                    <div className="d-flex">
                      <div className="offering-color-block" style={{ background: "rgba(111,161,225,1)" }}></div>
                    </div>
                    <div className="d-flex flex-column px-16">
                      <p className="offering-title">Tax Saver</p>
                      <p className="offering-description text-black m-0">Save taxes AND grow your wealth with ELSS funds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="offering-donut-chart-container pb-50">
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <svg className="img-fluid donut-container">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#tax-saver"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <MobileCards />
        <div className="row mt-48 d-none d-md-flex">
          <div className="col-12 text-center">
            <button
              className="align-items-center sb-secondary-cta-button btn large-btn more-investment-objectives-button unset-transform trigger-event"
              data-action="More investment objectives"
              data-category="conversion"
              data-label="More investment objectives"
              data-properties='{"action": "More investment objectives"}'
            >
              More investment objectives
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
