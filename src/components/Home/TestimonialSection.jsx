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
                        <p className="wealth-customer-testimonial pr-30">
                        We are extremely happy with the services rendered by Awesmart Team. You folks at Awesmart are really Smart when it comes to finance. We handed over our investments to you and you handled them with utmost caution. We are happy that we and our funds are in safe hands.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                      
                        type="button"
                      >
                        <div className= "testimonial-carousel-image-wrapper">
                        <img className="testimonial-carousel-image img-fluid" alt="Customer" src="https://www.awesmart.com/assets/testimonials/vasant_sundaram.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                      <div className="position-relative">
                      
                        <p className="wealth-customer-testimonial pr-30"> I am one of the first few investors through the company. Over a period of two years, I have invested substantial assets through Awesmart. My confidence in the company strengthened as a result of deft handling of my assets. It is my pleasure and privilege to wish them all the best for a bright future.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                        type="button"
                      >
                        <div className= "testimonial-carousel-image-wrapper">
                        <img className="testimonial-carousel-image img-fluid" alt=" brandname customer Chitra Iyengar" src="https://www.awesmart.com/assets/testimonials/kj_vari.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="6000">
                  <div className="row d-flex">
                    <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                      <div className="position-relative">
                     
                        <p className="wealth-customer-testimonial pr-30">Working with Awesmart was effortless and as comfortable as working with a member of your extended family. They promised what they could deliver and delivered what they assured. A very professional and courteous team. Look forward to a long term association with them.</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center text-md-left">
                      <div
                        className="wealth-customer-image trigger-event"
                        type="button"
                      >
                      <div className= "testimonial-carousel-image-wrapper">
                        <img className="testimonial-carousel-image img-fluid" alt="customer" src="https://www.awesmart.com/assets/testimonials/aditya_sagar.jpg" />
                        </div>
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
