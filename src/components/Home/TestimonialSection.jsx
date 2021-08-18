import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const TestimonialSection = () => {
  const options = {
    nextIcon: <FaArrowRight />,
    prevIcon: <FaArrowLeft />,
    indicators: false,
    nextLabel: "",
    prevLabel: "",
  };
  return (
    <div>
      <div className="wealth-section-space trusted-customer-testimonials moon-mist-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Carousel nextIcon={options.nextIcon} prevIcon={options.prevIcon} indicators={options.indicators} nextLabel={options.nextLabel} prevLabel={options.prevLabel}>
                <div className="carousel-item" data-interval="6000">
                  <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                      <div className="position-relative">
                        <div className="wealth-customer-quote">
                          <svg className="wealth-quote-svg">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#testimonial-quote"></use>
                          </svg>
                        </div>
                        <p className="wealth-customer-testimonial pr-30">
                          iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ips
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                        data-action="Home Customer testimonial"
                        data-category="conversion"
                        data-label="Customer image click"
                        data-properties='{"action": "Home Customer testimonial", "customer_name": "Prasad Ethireddy"}'
                        data-target="#wealth-video-testimonial"
                        data-toggle="modal"
                        data-video="https://www.youtube.com/embed/uZuGOafkzYA"
                        type="button"
                      >
                        <img className="img-fluid" alt=" brandname customer Prasad Ethireddy" src="https://source.unsplash.com/featured/?person" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                      <div className="position-relative">
                        <div className="wealth-customer-quote">
                          <svg className="wealth-quote-svg">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#testimonial-quote"></use>
                          </svg>
                        </div>
                        <p className="wealth-customer-testimonial pr-30">laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. P</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                        data-action="Home Customer testimonial"
                        data-category="conversion"
                        data-label="Customer image click"
                        data-properties='{"action": "Home Customer testimonial", "customer_name": "Srinivasan Soundararajan"}'
                        data-target="#wealth-video-testimonial"
                        data-toggle="modal"
                        data-video="https://www.youtube.com/embed/P9tkiuVINbk"
                        type="button"
                      >
                        <img className="img-fluid" alt=" brandname customer Srinivasan Soundararajan" src="https://source.unsplash.com/featured/?man" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                      <div className="position-relative">
                        <div className="wealth-customer-quote">
                          <svg className="wealth-quote-svg">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#testimonial-quote"></use>
                          </svg>
                        </div>
                        <p className="wealth-customer-testimonial pr-30"> a, fringilla eget, varius at, diam. In in diam nec sapien mattis interdum. Nunc augue nibh, congue in, placerat vel, adipiscing in, dui. Mauris b</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                        data-action="Home Customer testimonial"
                        data-category="conversion"
                        data-label="Customer image click"
                        data-properties='{"action": "Home Customer testimonial", "customer_name": "Chitra Iyengar"}'
                        data-target="#wealth-video-testimonial"
                        data-toggle="modal"
                        data-video="https://www.youtube.com/embed/kRUHlqcpm1Y"
                        type="button"
                      >
                        <img className="img-fluid" alt=" brandname customer Chitra Iyengar" src="https://source.unsplash.com/featured/?woman" />
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" aria-labelledby="wealth-video-testimonial-label" className="modal fade" data-keyboard="false" id="wealth-video-testimonial" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered border-0">
          <div className="modal-content border-0 p-0">
            <div className="modal-header border-0 p-0">
              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body border-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 sb-video-wrapper-js">
                <iframe title="djskjka" allow="autoplay" className="embed-responsive-item sb-video-iframe wealth-modal-video-js" frameBorder="0" height="360" src="" type="text/html" width="640"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
