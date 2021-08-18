import React from 'react'

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
                        <p className="offering-title"> brandname Emergency Fund</p>
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
              <div className="accordion" id="wealth-offering-faq-accordion" itemProp="mainEntity" itemScope="" itemType="https://schema.org/Question">
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
                          <p className="offering-title px-6 ma-0 w-100"> brandname Emergency Fund</p>
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

    )
}

export default SolutionSection
