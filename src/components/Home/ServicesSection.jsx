import React from 'react'

const ServicesSection = () => {
    return (
        <div className="wealth-creation-features wealth-section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row">
                <div className="flex-fill">
                  <h2 className="wealth-section-title">Wealth-creation without worry.</h2>
                </div>
                <div className="d-flex text-right">
                  <svg
                    className="home-svg-sprite glider-prev carousel-back-arrow scroll-back-arrow arrow-disabled trigger-event"
                    data-action="Web Benefits Carousel Click"
                    data-category="conversion"
                    data-label="Previous"
                    data-properties='{"action": "Web Benefits Carousel Click"}'
                    height="30px"
                    width="30px"
                  >
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-before"></use>
                  </svg>
                  <svg
                    className="home-svg-sprite glider-next carousel-forward-arrow scroll-forward-arrow trigger-event"
                    data-action="Web Benefits Carousel Click"
                    data-category="conversion"
                    data-label="Next"
                    data-properties='{"action": "Web Benefits Carousel Click"}'
                    height="30px"
                    width="30px"
                  >
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-next"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row x-overflow-scroll no-gutters scripbox-feature-carousel">
            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#FFFBF2" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title">Family Account</p>
                  <p className="wealth-section-description text-black">One dashboard, insights and information for all your family members' investments.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="annual-rebalance wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#F7FAF5" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title"> brandname Smart Withdraw™</p>
                  <p className="wealth-section-description text-black">Reduce your exit loads and capital gain taxes when you withdraw.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="feature-family-account wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#F2F8FF" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title"> brandname Annual Rebalance™</p>
                  <p className="wealth-section-description text-black">Because even the best investment strategies need reviews and course corrections.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="fund-algo wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#FFFBF2" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title"> brandname Portfolio Scan™</p>
                  <p className="wealth-section-description text-black">Supercharge your investments with personalised portfolio recommendations, thrice a year.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="goal-based-investing wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#F7FAF5" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title">Fund Ranking &amp; Selection Algorithm™</p>
                  <p className="wealth-section-description text-black">The Secret sauce to ensure your portfolio has right funds, always.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="investing-strategies wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#F2F8FF" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title">Goal-Based Investing</p>
                  <p className="wealth-section-description text-black">Retirement? Child's education? Your first crore? Invest for all that matters to you and yours</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="portfolio-scan wealth-features-sprite"></div>
                </div>
              </div>
            </div>

            <div className="col-md-3 card scripbox-feature-card" style={{ background: "#FFFBF2" }}>
              <div className="card-body p-0">
                <div className="feature-content-section">
                  <p className="feature-title">Investing Strategies</p>
                  <p className="wealth-section-description text-black">Capital protection to diversification, different strategies for different investment needs.</p>
                </div>
              </div>
              <div className="card-footer p-0">
                <div className="feature-illustration">
                  <div className="smart-withdraw wealth-features-sprite"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center text-black">
              <p className="wealth-section-description mt-25 mb-14">As your wealth managers, we do all of this and more.</p>
              <a
                className="sb-secondary-cta-button trigger-event unset-transform"
                data-action="Web Home schedule a call"
                data-category="conversion"
                data-label="Schedule a Call"
                data-properties='{"action": "Web Home schedule a call"}'
                href="/plans/schedule-call-back"
              >
                Schedule a call
              </a>
              <p className="wealth-section-description mt-14 m-0">
                or call us at
                <a className="sb-blue-link trigger-event" data-category="schedule-call" data-action="call toll free" data-label="home" href="tel:xxxx-xxx-xxxx">
                  xxxx-xxx-xxxx
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    )
}

export default ServicesSection
