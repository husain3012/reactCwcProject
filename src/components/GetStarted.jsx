import HomeHeader from '../components/HomeHeader';

function GetStarted() {
  return (
    <div class='scripbox-official-offerings' id='scripbox-wealth-home'>
    <div id="get-started">
      <div className="wealth-header-image mobile-wealth-header"></div>
    <HomeHeader/>
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
                <img className="img-fluid" alt="Scripbox - Mobile app dashboard " src="https://asset11.scripbox.com/assets/invest/wealth-home/science-app-dashboard-fc6b256de85780a57aa557b5c8a027a8f6165c333f1d28a93dba24c1af85d818.png" />
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
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "core_mutual_fund_portfolio"}'
                href="/invest/investment-info/ala_carte?ref=home-offerings-core-mutual-fund"
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
                      <img src="/assets/piechart1.svg"  className="img-fluid donut-container"/>
                  
                     
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "principal_protection"}'
                href="/invest/investment-info/principal-protection?ref=home-offerings-principal-protection"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-principal-protection"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(81,110,215,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">Principal Protection &amp; Growth</p>
                        <p className="offering-description text-black m-0">Growth and safety of your large one-time investments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <div className="carousel slide" data-interval="true" data-ride="carousel" id="sb-offering-wealth-carousel-principal-protection-end">
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-interval="6000">
                            <svg className="donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#principal-protection-start"></use>
                            </svg>
                          </div>
                          <div className="carousel-item" data-interval="6000">
                            <svg className="donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#principal-protection-end"></use>
                            </svg>
                          </div>
                          <ol className="carousel-indicators sb-carousel-indicator">
                            <li className="active" data-slide-to="0" data-target="#sb-offering-wealth-carousel-principal-protection-end"></li>
                            <li data-slide-to="1" data-target="#sb-offering-wealth-carousel-principal-protection-end" className=""></li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "retire_confident"}'
                href="/plans/retire-confident#fullscreen"
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
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "cash_management_plan"}'
                href="/invest/investment-info/cash_management_plan?ref=home-offerings-cash-management-plan"
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
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "tax_saver_plan"}'
                href="/plans/tax-saver-plan?ref=home-offerings-elss"
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
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "emergency_fund"}'
                href="/invest/investment-info/liquid?ref=home-offerings-liquid"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-emergency-money"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(74,151,60,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">Scripbox Emergency Fund</p>
                        <p className="offering-description text-black m-0">Stay prepared with liquid funds; better growth than savings accounts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <svg className="img-fluid donut-container">
                        <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#emergency-fund"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "smart_transfer_plan"}'
                href="/invest/investment-info/smart-transfer-plan?ref=home-offerings-smart-transfer-plan"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#smart-transfer-plan"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">Smart Transfer Plan</p>
                        <p className="offering-description text-black m-0">Invest a lump sum in equity funds without worrying about volatility</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <div className="carousel slide" data-interval="true" data-ride="carousel" id="sb-offering-wealth-carousel-smart-transfer-plan-end">
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-interval="6000">
                            <svg className="donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#smart-transfer-plan-start"></use>
                            </svg>
                          </div>
                          <div className="carousel-item" data-interval="6000">
                            <svg className="donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#smart-transfer-plan-end"></use>
                            </svg>
                          </div>
                          <ol className="carousel-indicators sb-carousel-indicator">
                            <li className="active" data-slide-to="0" data-target="#sb-offering-wealth-carousel-smart-transfer-plan-end"></li>
                            <li data-slide-to="1" data-target="#sb-offering-wealth-carousel-smart-transfer-plan-end" className=""></li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "child_education"}'
                href="/plans/premier-education#fullscreen"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-child-education"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">Child Education</p>
                        <p className="offering-description text-black m-0">Capital protection to diversification, different strategies for different investment needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <svg className="img-fluid donut-container">
                        <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#child-education"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "first_crore"}'
                href="/plans/my-first-crore#fullscreen"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-my-first-crore"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">My First Crore</p>
                        <p className="offering-description text-black m-0">Build your 1st Crore with SIPs as small as Rs 5,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <svg className="img-fluid donut-container">
                        <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#first-crore"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 align-self-stretch my-10">
              <a
                className="w-100 h-100 card scripbox-offering-card mt-3 learn-more-link sb-blue-link trigger-event"
                data-action="Offering Learn more"
                data-category="conversion"
                data-label="Learn more"
                data-properties='{"action": "Offering Learn more", "offering": "lifestyle_goals"}'
                href="/plans/dream-planner#fullscreen"
                rel="nofollow"
              >
                <div className="card-body px-0">
                  <div className="pt-2 pl-6">
                    <svg height="56px" width="56px">
                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-dream-planner"></use>
                    </svg>
                  </div>
                  <div className="feature-content-section">
                    <div className="d-flex flex-row">
                      <div className="d-flex">
                        <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                      </div>
                      <div className="d-flex flex-column px-16">
                        <p className="offering-title">Dream Planner</p>
                        <p className="offering-description text-black m-0">Vacation, car, wedding — invest for all that you dream of</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer p-0">
                  <div className="offering-donut-chart-container pb-50">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                      <svg className="img-fluid donut-container">
                        <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#dream-planner"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row d-flex d-md-none wealth-offering-mobile">
            <div className="col-12">
              <div className="accordion" id="wealth-offering-faq-accordion" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                <div className="scripbox-offering-card mb-20 pointer-cursor">
                  <div className="home-offering-collapse-header" id="wealth-heading-0">
                    <div aria-controls="wealth-offering-0" aria-expanded="true" className="p-20 text-left" data-target="#wealth-offering-0" data-toggle="collapse">
                      <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                        <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                        <div className="d-flex">
                          <svg height="52px" width="52px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-core-mutual-fund-portfolio"></use>
                          </svg>
                        </div>
                        <p className="offering-title px-6 ma-0 w-100">Core Mutual Fund Portfolio</p>
                        <div className="arrow-down flex-shrink-1 px-12">
                          <svg className="home-svg-sprite" height="40px" width="40px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-labelledby="wealth-heading-0" className="collapse show" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-0">
                    <div className="pl-58">
                      <div className="pt-2">
                        <p className="offering-description text-black m-0">Inflation-beating growth with equity funds</p>
                      </div>
                      <div className="offering-donut-chart-container px-16 pt-30">
                        <div className="d-flex flex-row align-items-center">
                          <div className="d-flex">
                            <svg className="img-fluid donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#core-mutual-fund-portfolio"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="py-30">
                        <a
                          className="sb-blue-link trigger-event"
                          data-action="Offering Learn more"
                          data-category="conversion"
                          data-label="Learn more"
                          data-properties='{"action": "Offering Learn more", "offering": "core_mutual_fund_portfolio"}'
                          href="/invest/investment-info/ala_carte?ref=home-offerings-core-mutual-fund"
                          rel="nofollow"
                        >
                          Learn More
                          <div className="d-inline-block ml-10">
                            <svg height="16px" width="16px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scripbox-offering-card mb-20 pointer-cursor">
                  <div className="home-offering-collapse-header" id="wealth-heading-1">
                    <div aria-controls="wealth-offering-1" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-1" data-toggle="collapse">
                      <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                        <div className="offering-color-block" style={{ background: "rgba(81,110,215,1)" }}></div>
                        <div className="d-flex">
                          <svg height="52px" width="52px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-principal-protection"></use>
                          </svg>
                        </div>
                        <p className="offering-title px-6 ma-0 w-100">Principal Protection &amp; Growth</p>
                        <div className="arrow-down flex-shrink-1 px-12">
                        <img src="/assets/linechart.svg"  className="img-fluid donut-container"/>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-labelledby="wealth-heading-1" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-1">
                    <div className="pl-58">
                      <div className="pt-2">
                        <p className="offering-description text-black m-0">Growth and safety of your large one-time investments</p>
                      </div>
                      <div className="offering-donut-chart-container px-16 pt-30">
                        <div className="d-flex flex-row align-items-center">
                          <div className="d-flex">
                            <div className="carousel slide" data-interval="true" data-ride="false" id="sb-offering-wealth-carousel">
                              <div className="carousel-inner">
                                <div className="active carousel-item" data-interval="6000">
                                  <svg className="img-fluid donut-container">
                                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#principal-protection-start"></use>
                                  </svg>
                                </div>
                                <div className="carousel-item" data-interval="6000">
                                <img src="/assets/linechart.svg"  className="img-fluid donut-container"/>

                                </div>
                                <ol className="carousel-indicators sb-carousel-indicator">
                                  <li className="active" data-slide-to="0" data-target="#sb-offering-wealth-carousel"></li>
                                  <li data-slide-to="1" data-target="#sb-offering-wealth-carousel"></li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-30">
                        <a
                          className="sb-blue-link trigger-event"
                          data-action="Offering Learn more"
                          data-category="conversion"
                          data-label="Learn more"
                          data-properties='{"action": "Offering Learn more", "offering": "principal_protection"}'
                          href="/invest/investment-info/principal-protection?ref=home-offerings-principal-protection"
                          rel="nofollow"
                        >
                          Learn More
                          <div className="d-inline-block ml-10">
                            <svg height="16px" width="16px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scripbox-offering-card mb-20 pointer-cursor">
                  <div className="home-offering-collapse-header" id="wealth-heading-2">
                    <div aria-controls="wealth-offering-2" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-2" data-toggle="collapse">
                      <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                        <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                        <div className="d-flex">
                          <svg height="52px" width="52px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-retire-confident"></use>
                          </svg>
                        </div>
                        <p className="offering-title px-6 ma-0 w-100">Retire Confident</p>
                        <div className="arrow-down flex-shrink-1 px-12">
                          <svg className="home-svg-sprite" height="40px" width="40px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-labelledby="wealth-heading-2" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-2">
                    <div className="pl-58">
                      <div className="pt-2">
                        <p className="offering-description text-black m-0">Plan and invest for hassle-free sunset years</p>
                      </div>
                      <div className="offering-donut-chart-container px-16 pt-30">
                        <div className="d-flex flex-row align-items-center">
                          <div className="d-flex">
                            <svg className="img-fluid donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#retire-confident"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="py-30">
                        <a
                          className="sb-blue-link trigger-event"
                          data-action="Offering Learn more"
                          data-category="conversion"
                          data-label="Learn more"
                          data-properties='{"action": "Offering Learn more", "offering": "retire_confident"}'
                          href="/plans/retire-confident#fullscreen"
                          rel="nofollow"
                        >
                          Learn More
                          <div className="d-inline-block ml-10">
                            <svg height="16px" width="16px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scripbox-offering-card mb-20 pointer-cursor">
                  <div className="home-offering-collapse-header" id="wealth-heading-3">
                    <div aria-controls="wealth-offering-3" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-3" data-toggle="collapse">
                      <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                        <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                        <div className="d-flex">
                          <svg height="52px" width="52px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-cash-management"></use>
                          </svg>
                        </div>
                        <p className="offering-title px-6 ma-0 w-100">Cash Management</p>
                        <div className="arrow-down flex-shrink-1 px-12">
                          <svg className="home-svg-sprite" height="40px" width="40px">
                            <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-labelledby="wealth-heading-3" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-3">
                    <div className="pl-58">
                      <div className="pt-2">
                        <p className="offering-description text-black m-0">Grow your "extra" cash with Liquid funds</p>
                      </div>
                      <div className="offering-donut-chart-container px-16 pt-30">
                        <div className="d-flex flex-row align-items-center">
                          <div className="d-flex">
                            <svg className="img-fluid donut-container">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#cash-management"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="py-30">
                        <a
                          className="sb-blue-link trigger-event"
                          data-action="Offering Learn more"
                          data-category="conversion"
                          data-label="Learn more"
                          data-properties='{"action": "Offering Learn more", "offering": "cash_management_plan"}'
                          href="/invest/investment-info/cash_management_plan?ref=home-offerings-cash-management-plan"
                          rel="nofollow"
                        >
                          Learn More
                          <div className="d-inline-block ml-10">
                            <svg height="16px" width="16px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center d-md-none">
                  <button
                    className="align-items-center sb-secondary-cta-button large-btn more-investment-objectives-button mt-24 unset-transform trigger-event"
                    data-action="More investment objectives"
                    data-category="conversion"
                    data-label="More investment objectives"
                    data-properties='{"action": "More investment objectives"}'
                  >
                    More investment objectives
                  </button>
                </div>
                <div className="reveal-all-offerings-js" style={{ display: "none" }}>
                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-4">
                      <div aria-controls="wealth-offering-4" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-4" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(111,161,225,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-tax-saver-plan"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">Tax Saver</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-4" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-4">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Save taxes AND grow your wealth with ELSS funds</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <svg className="img-fluid donut-container">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#tax-saver"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "tax_saver_plan"}'
                            href="/plans/tax-saver-plan?ref=home-offerings-elss"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-5">
                      <div aria-controls="wealth-offering-5" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-5" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(74,151,60,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-emergency-money"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">Scripbox Emergency Fund</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-5" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-5">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Stay prepared with liquid funds; better growth than savings accounts</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <svg className="img-fluid donut-container">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#emergency-fund"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "emergency_fund"}'
                            href="/invest/investment-info/liquid?ref=home-offerings-liquid"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-6">
                      <div aria-controls="wealth-offering-6" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-6" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(183,122,10,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#smart-transfer-plan"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">Smart Transfer Plan</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-6" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-6">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Invest a lump sum in equity funds without worrying about volatility</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <div className="carousel slide" data-interval="true" data-ride="false" id="sb-offering-wealth-carousel">
                                <div className="carousel-inner">
                                  <div className="active carousel-item" data-interval="6000">
                                    <svg className="img-fluid donut-container">
                                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#smart-transfer-plan-start"></use>
                                    </svg>
                                  </div>
                                  <div className="carousel-item" data-interval="6000">
                                    <svg className="img-fluid donut-container">
                                      <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#smart-transfer-plan-end"></use>
                                    </svg>
                                  </div>
                                  <ol className="carousel-indicators sb-carousel-indicator">
                                    <li className="active" data-slide-to="0" data-target="#sb-offering-wealth-carousel"></li>
                                    <li data-slide-to="1" data-target="#sb-offering-wealth-carousel"></li>
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "smart_transfer_plan"}'
                            href="/invest/investment-info/smart-transfer-plan?ref=home-offerings-smart-transfer-plan"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-7">
                      <div aria-controls="wealth-offering-7" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-7" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-child-education"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">Child Education</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-7" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-7">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Capital protection to diversification, different strategies for different investment needs.</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <svg className="img-fluid donut-container">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#child-education"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "child_education"}'
                            href="/plans/premier-education#fullscreen"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-8">
                      <div aria-controls="wealth-offering-8" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-8" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-my-first-crore"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">My First Crore</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-8" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-8">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Build your 1st Crore with SIPs as small as Rs 5,000</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <svg className="img-fluid donut-container">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#first-crore"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "first_crore"}'
                            href="/plans/my-first-crore#fullscreen"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="scripbox-offering-card mb-20 pointer-cursor">
                    <div className="home-offering-collapse-header" id="wealth-heading-9">
                      <div aria-controls="wealth-offering-9" aria-expanded="false" className="collapsed p-20 text-left" data-target="#wealth-offering-9" data-toggle="collapse">
                        <div className="d-flex flex-row pt-20 pb-10 align-items-start">
                          <div className="offering-color-block" style={{ background: "rgba(175,97,40,1)" }}></div>
                          <div className="d-flex">
                            <svg height="52px" width="52px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-dream-planner"></use>
                            </svg>
                          </div>
                          <p className="offering-title px-6 ma-0 w-100">Dream Planner</p>
                          <div className="arrow-down flex-shrink-1 px-12">
                            <svg className="home-svg-sprite" height="40px" width="40px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-labelledby="wealth-heading-9" className="collapse" data-parent="#wealth-offering-faq-accordion" id="wealth-offering-9">
                      <div className="pl-58">
                        <div className="pt-2">
                          <p className="offering-description text-black m-0">Vacation, car, wedding — invest for all that you dream of</p>
                        </div>
                        <div className="offering-donut-chart-container px-16 pt-30">
                          <div className="d-flex flex-row align-items-center">
                            <div className="d-flex">
                              <svg className="img-fluid donut-container">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/offering-donut-svg.svg#dream-planner"></use>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="py-30">
                          <a
                            className="sb-blue-link trigger-event"
                            data-action="Offering Learn more"
                            data-category="conversion"
                            data-label="Learn more"
                            data-properties='{"action": "Offering Learn more", "offering": "lifestyle_goals"}'
                            href="/plans/dream-planner#fullscreen"
                            rel="nofollow"
                          >
                            Learn More
                            <div className="d-inline-block ml-10">
                              <svg height="16px" width="16px">
                                <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#external-link-arrow"></use>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-48 d-none d-md-flex">
            <div className="col-12 text-center">
              <button
                className="align-items-center sb-secondary-cta-button large-btn more-investment-objectives-button unset-transform trigger-event"
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

      <div className="moon-mist-background thrive-on-trust wealth-section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sb-tag trust mb-12">Trust</div>
              <h2 className="wealth-section-title mb-6">We thrive on trust.</h2>
              <p className="wealth-section-description text-black">And you don’t need to just take our word for it! We manage...</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center text-md-left">
              <div className="highlighted-number">
                3700
                <div className="plus-sign">
                  <span>+</span>
                  <div className="floating-text floating-content">Crores</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-left">
              <div className="floating-text right d-block d-md-none">Across</div>
              <div className="highlighted-number">
                2500
                <div className="floating-text floating-content right d-none d-md-inline-block">Across</div>
                <div className="plus-sign">
                  <span>+</span>
                  <div className="floating-text floating-content">Cities</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-left">
              <div className="floating-text right d-block d-md-none">And</div>
              <div className="highlighted-number">
                6400
                <div className="floating-text floating-content right d-none d-md-inline-block">AND</div>
                <div className="plus-sign">
                  <span>+</span>
                  <div className="floating-text floating-content million-text d-none d-md-inline-block">
                    Customers are
                    <br />
                    millionaires
                  </div>
                </div>
              </div>
              <div className="floating-text right d-block d-md-none">Customers are millionaires</div>
            </div>
          </div>
        </div>
      </div>

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
                  <p className="feature-title">Scripbox Smart Withdraw™</p>
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
                  <p className="feature-title">Scripbox Annual Rebalance™</p>
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
                  <p className="feature-title">Scripbox Portfolio Scan™</p>
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

      <div className="wealth-section-space trusted-customer-testimonials moon-mist-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="carousel slide" data-ride="carousel" id="sb-wealth-testimonial">
                <div className="carousel-inner">
                  <div className="carousel-item" data-interval="6000">
                    <div className="row d-flex">
                      <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                        <div className="position-relative">
                          <div className="wealth-customer-quote">
                            <svg className="wealth-quote-svg">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#testimonial-quote"></use>
                            </svg>
                          </div>
                          <p className="wealth-customer-testimonial pr-30"> iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ips</p>
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
                          <img
                            className="img-fluid"
                            alt="Scripbox customer Prasad Ethireddy"
                            src="https://source.unsplash.com/featured/?person"
                          />
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
                          <p className="wealth-customer-testimonial pr-30">laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. P</p>
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
                          <img
                            className="img-fluid"
                            alt="Scripbox customer Srinivasan Soundararajan"
                            src="https://source.unsplash.com/featured/?man"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item active" data-interval="6000">
                    <div className="row d-flex">
                      <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
                        <div className="position-relative">
                          <div className="wealth-customer-quote">
                            <svg className="wealth-quote-svg">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#testimonial-quote"></use>
                            </svg>
                          </div>
                          <p className="wealth-customer-testimonial pr-30"> a, fringilla eget, 
varius at, diam. In in diam nec sapien mattis interdum. Nunc augue nibh,
congue in, placerat vel, adipiscing in, dui. Mauris b</p>
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
                          <img
                            className="img-fluid"
                            alt="Scripbox customer Chitra Iyengar"
                            src="https://source.unsplash.com/featured/?woman"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators sb-carousel-indicator">
                  <li className="" data-slide-to="0" data-target="#sb-wealth-testimonial"></li>
                  <li data-slide-to="1" data-target="#sb-wealth-testimonial" className=""></li>
                  <li data-slide-to="2" data-target="#sb-wealth-testimonial" className="active"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" aria-labelledby="wealth-video-testimonial-label" className="modal fade" data-keyboard="false" id="wealth-video-testimonial" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered border-0">
          <div className="modal-content border-0 p-0">
            <div className="modal-header border-0 p-0">
              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body border-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 sb-video-wrapper-js">
                <iframe title="djskjka" allow="autoplay" className="embed-responsive-item sb-video-iframe wealth-modal-video-js" frameborder="0" height="360" src="" type="text/html" width="640"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="in-the-press wealth-section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sb-tag trust mb-12">Press</div>
              <h2 className="wealth-section-title">In the press</h2>
              <a className="d-block media-house-logo-wrapper" href="/pages/in-the-news" target="_blank">
                <div className="media-house-logo-block"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wealth-section-space home-blog-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12">
              <div className="d-flex flex-row">
                <div className="flex-fill">
                  <h2 className="wealth-section-title mb-6">Resources</h2>
                </div>
                <div className="d-flex text-right">
                  <svg className="home-svg-sprite glider-prev blog-back-arrow scroll-back-arrow arrow-disabled" height="30px" width="30px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-before"></use>
                  </svg>
                  <svg className="home-svg-sprite glider-next blog-forward-arrow scroll-back-arrow" height="30px" width="30px">
                    <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#home-carousel-next"></use>
                  </svg>
                </div>
              </div>
              <p className="wealth-section-description text-black">Insights to help your grow.</p>
            </div>
          </div>
          <div className="d-flex x-overflow-scroll home-blog-carousel no-gutters">
            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4531"}'
                  href="#/three-reasons-not-to-delay-your-investment-even-if-this-is-a-market-peak"
                  title="Three reasons not to delay your investment even if this is a market peak"
                >
                  <article className="post entry">
                    <div
                      alt="Three reasons not to delay your investment even if this is a market peak"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content3.scripbox.com/content/attachment/7115/square_large_equity_market_peak_2021_tny.jpeg"
                      style={{ backgroundImage: "url('https://content3.scripbox.com/content/attachment/7115/square_thumb_equity_market_peak_2021_tny.jpeg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      01/06/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      Three reasons not to delay your investment even if this is a market peak
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      With the markets at all-time highs, wondering if it is better to sit on cash? We think otherwise and here's why.
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4531"}'
                  href="#/three-reasons-not-to-delay-your-investment-even-if-this-is-a-market-peak"
                  title="Three reasons not to delay your investment even if this is a market peak"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4530"}'
                  href="#/asset-allocation-and-diversification-are-they-related"
                  title="Asset allocation and diversification – are they related?"
                >
                  <article className="post entry">
                    <div
                      alt="Asset allocation and diversification – are they related?"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content2.scripbox.com/content/attachment/7114/square_large_asset_allocation_diversification_tny.jpeg"
                      style={{ backgroundImage: "url('https://content2.scripbox.com/content/attachment/7114/square_thumb_asset_allocation_diversification_tny.jpeg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      31/05/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      Asset allocation and diversification – are they related?
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      Both Asset allocation and diversification play a big role in creating an effective wealth portfolio. But are they related and why does it matter to you as an investor?
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4530"}'
                  href="#/asset-allocation-and-diversification-are-they-related"
                  title="Asset allocation and diversification – are they related?"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4528"}'
                  href="#/does-your-wealth-plan-need-international-equity"
                  title="Does your wealth plan need international equity?"
                >
                  <article className="post entry">
                    <div
                      alt="Does your wealth plan need international equity?"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content2.scripbox.com/content/attachment/7110/square_large_do_you_need_international_equity_tny.jpeg"
                      style={{ backgroundImage: "url('https://content2.scripbox.com/content/attachment/7110/square_thumb_do_you_need_international_equity_tny.jpeg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      25/05/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      Does your wealth plan need international equity?
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      Considering there is a performance lag between large-cap fund performance and international fund of funds over the last year, are international funds still worth your while?
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4528"}'
                  href="#/does-your-wealth-plan-need-international-equity"
                  title="Does your wealth plan need international equity?"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4527"}'
                  href="#/what-are-the-nav-applicability-norms-in-mutual-funds-starting-from-1st-february-2021"
                  title="What are the NAV applicability norms in mutual funds starting from 1st February 2021"
                >
                  <article className="post entry">
                    <div
                      alt="What are the NAV applicability norms in mutual funds starting from 1st February 2021"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content1.scripbox.com/content/attachment/7109/square_large_SEBI_mf_news_1_tny.jpg"
                      style={{ backgroundImage: "url('https://content1.scripbox.com/content/attachment/7109/square_thumb_SEBI_mf_news_1_tny.jpg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      24/05/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      What are the NAV applicability norms in mutual funds starting from 1st February 2021
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      This is in relation to a SEBI circular published on 17th September 2020, on the Uniformity in the applicability of Net Asset Value across various schemes upon realization of funds
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4527"}'
                  href="#/what-are-the-nav-applicability-norms-in-mutual-funds-starting-from-1st-february-2021"
                  title="What are the NAV applicability norms in mutual funds starting from 1st February 2021"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4526"}'
                  href="#/why-having-joint-ownership-of-financial-securities-can-be-useful"
                  title="Why having joint ownership of financial securities can be useful"
                >
                  <article className="post entry">
                    <div
                      alt="Why having joint ownership of financial securities can be useful"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content3.scripbox.com/content/attachment/7103/square_large_joint_holding_of_securities_tny.jpeg"
                      style={{ backgroundImage: "url('https://content3.scripbox.com/content/attachment/7103/square_thumb_joint_holding_of_securities_tny.jpeg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      24/05/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      Why having joint ownership of financial securities can be useful
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      All you need to know about why Joint holding of your financial assets should be on your priority list.
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4526"}'
                  href="#/why-having-joint-ownership-of-financial-securities-can-be-useful"
                  title="Why having joint ownership of financial securities can be useful"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="card home-blog-card border-0">
              <div className="card-body p-0">
                <a
                  className="trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4525"}'
                  href="#/what-are-the-steps-involved-in-making-a-death-claim-on-a-life-insurance-policy"
                  title="What are the steps involved in making a death claim on a life insurance policy?"
                >
                  <article className="post entry">
                    <div
                      alt="What are the steps involved in making a death claim on a life insurance policy?"
                      className="blog-article-image blog-post-image lazy"
                      data-src="https://content0.scripbox.com/content/attachment/7096/square_large_insurance_claim_tny.jpeg"
                      style={{ backgroundImage: "url('https://content0.scripbox.com/content/attachment/7096/square_thumb_insurance_claim_tny.jpeg')" }}
                    ></div>
                    <p className="blog-article-date" itemprop="headline">
                      20/05/21
                    </p>
                    <p className="feature-title blog-article-title" itemprop="headline">
                      What are the steps involved in making a death claim on a life insurance policy?
                    </p>
                    <p className="blog-article-description" itemprop="text">
                      Here's all you need to know to make this otherwise difficult process somewhat bearable
                    </p>
                  </article>
                </a>
              </div>
              <div className="card-footer p-0 border-0">
                <a
                  className="sb-blue-link trigger-event"
                  data-action="Blog article - Home"
                  data-category="conversion"
                  data-label="Blog"
                  data-properties='{"action": "Blog article - Home", "article_id": "4525"}'
                  href="#/what-are-the-steps-involved-in-making-a-death-claim-on-a-life-insurance-policy"
                  title="What are the steps involved in making a death claim on a life insurance policy?"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="moon-mist-background wealth-section-space get-started-with-ease">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-6">
              <img className="img-fluid" alt="Scripbox mobile app showcase" src="https://asset10.scripbox.com/assets/invest/wealth-home/app-showcase-d51085300ad175b83825568b0d131c22181e26ac0741f605017d8c6aa9217a2c.png" />
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
                Or rather, with eCAS. The Scripbox Portfolio Audit will analyse your existing investments and recommend the best action for your portfolio. For free. All you need to do is to upload your eCAS statement!
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

      <div className="home-wealth-faq wealth-section-space wealth-faq-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="wealth-section-title">Frequently asked questions</h2>
              <div className="accordion wealth-faq-collapse-wrapper" id="faq-accordion-set-1" itemscope="" itemtype="https://schema.org/FAQPage">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-0">
                        <div aria-controls="collapse-0" aria-expanded="true" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-0" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            How does Scripbox earn money?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-0" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-0" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          Glad you asked. No fees, no hidden charges. We earn a small fee from the mutual fund companies. The exact commissions are on our{" "}
                          <a href="https://scripbox.com/pages/disclosures" target="_blank" className="sb-blue-link">
                            Disclosures page
                          </a>
                          , and you can see that it does not influence our{" "}
                          <a href="https://scripbox.com/mutual-fund/best-mutual-funds" target="_blank" className="sb-blue-link">
                            fund recommendations
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-1">
                        <div aria-controls="collapse-1" aria-expanded="false" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-1" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            How soon can I start investing?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-1" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-1" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          We'll have you up and running in just a few hours. As soon as you complete your registration, and we verify the details. You can start investing via Internet Banking/UPI ID/Auto Debit payment methods.
                        </div>
                      </div>
                    </div>
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-2">
                        <div aria-controls="collapse-2" aria-expanded="false" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-2" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            Why should I invest through Scripbox?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-2" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-2" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          Unbiased recommendations, a single view of your investments, automated performance tracking, timely alerts for course corrections, easy investment process, tax efficient withdrawals. There’s more, but do ask our
                          customers, we have a retention rate of 95%. We really are good people!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-3">
                        <div aria-controls="collapse-3" aria-expanded="false" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-3" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            Can I add a family member to my Scripbox investment account?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-0" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-3" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          Absolutely. Just use ‘Add a Family Member’ in your Scripbox account. This new account will be linked to your existing Scripbox account, and you’ll get a single dashboard that helps you make better decisions, with
                          information and insights.
                        </div>
                      </div>
                    </div>
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-4">
                        <div aria-controls="collapse-4" aria-expanded="false" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-4" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            Can I invest in funds other than the ones Scripbox recommends?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-1" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-4" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          Yes, you can. But then again, would you really want to do that when our recommendations are backed by a time-tested process and an unbiased algorithm that has beaten benchmarks, in 8 out of 9 years?
                        </div>
                      </div>
                    </div>
                    <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
                      <div className="wealth-faq-collapse-header" id="heading-5">
                        <div aria-controls="collapse-5" aria-expanded="false" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed" data-target="#collapse-5" data-toggle="collapse">
                          <p className="m-0" itemprop="name">
                            How do you ensure that my money is secure?
                          </p>
                          <div className="arrow-down">
                            <svg className="home-svg-sprite" height="30px" width="30px">
                              <use xlinkHref="https://scripbox.com/assets/svg-sprite/home-plan-svg.svg#faq-expand-more"></use>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div aria-labelledby="heading-2" className="collapse" data-parent="#faq-accordion-set-1" id="collapse-5" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
                        <div className="wealth-faq-collapse-content" itemprop="text">
                          We have invested in technology that ensures the system’s security. Our money is invested here too, remember? Your money moves directly from your bank to the mutual fund account, and a record of your investments is
                          stored electronically by the mutual fund company, which will send you regular statements too.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GetStarted;
