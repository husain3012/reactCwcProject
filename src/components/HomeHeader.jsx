function HomeHeader() {
  return (
    <div className="home-header">
      <div className="container">
        <div className="row d-flex">
          <div className="col-12 col-md-6 d-flex align-items-stretch header-content-wrapper">
            <div className="align-self-center">
              <div className="wealth-header-content">
                <h1 className="header-wealth-title">
                  LOREM IPSUM
                  <div className="highlighted-word-wrapper">
                    <div className="text-animation-wrapper">
                      <input className="child animated-header-input spin-to-top hide" id="animated-header-input" />
                      <div className="static-text-box child spin-to-top hide" id="animated-header-automated-text">
                        SUBHEADING 1
                      </div>
                      <div className="static-text-box child text-rotate" id="animated-hfeader-delivered-text">
                      SUBHEADING 2
                        <span className="fullstop" id="animated-header-fullstop"></span>
                      </div>
                    </div>
                  </div>
                </h1>
                <div className="header-wealth-description mb-24 header-wealth-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! </div>
              </div>
              <div className="mt-3 mb-3">
                <button
                  className="d-inline-flex align-items-center sb-secondary-cta-button large-btn unset-transform offering-smooth-scroll-tag trigger-event j-trigger-mr"
                  data-action="Find Out How - Home"
                  data-category="conversion"
                  data-id=".scroll-to-science"
                  data-label="Find out how"
                  data-properties='{"action": "Find Out How - Home"}'
                >
                  CLICK ME
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="wealth-header-image desktop-wealth-header"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader