import React from 'react'

const ScienceSection = () => {
    return (
        <div className="wealth-section-space science-by-people pb-0 scroll-to-science">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-6">
              <div className="sb-tag science mb-12 d-md-none">Science</div>
              <h2 className="d-md-none wealth-section-title">
                Good science.
                <br />
                Backed by good people.
              </h2>
              <div className="science-app-image">
                <img className="img-fluid" alt=" brandname - Mobile app dashboard " src="https://asset11.scripbox.com/assets/invest/wealth-home/science-app-dashboard-fc6b256de85780a57aa557b5c8a027a8f6165c333f1d28a93dba24c1af85d818.png" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="align-self-center">
                <div>
                  <div className="sb-tag science mb-12 d-none d-md-inline-block">Science</div>
                  <h2 className="d-none d-md-block wealth-section-title">
                    Good science.
                    <br />
                    Backed by good people.
                  </h2>
                  <div className="wealth-section-description">
                    Science and proprietary algorithms for portfolio management. Expert wealth managers to help. And a promise that we buy what we recommend too. Because we are in this together.
                  </div>
                  <a
                    className="d-inline-block sb-blue-link mt-8 mb-20 font-weight-bold trigger-event"
                    data-action="Know Science - Home"
                    data-category="conversion"
                    data-label="Know the science behind it all"
                    data-properties='{"action": "Know Science - Home"}'
                    href="/pages/science-best-mutual-fund-selection"
                  >
                    Know the science behind it all
                  </a>
                  <div className="wealth-section-description">So, go ahead, put us to test. Let us analyse your existing portfolio, and tell you the good from the bad.</div>
                  <a
                    className="sb-secondary-cta-button mt-20 unset-transform trigger-event"
                    data-action="Learn More - Home"
                    data-category="conversion"
                    data-label="Learn more"
                    data-properties='{"action": "Learn More - Home"}'
                    href="/pages/mutual-fund-ecas"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default ScienceSection
