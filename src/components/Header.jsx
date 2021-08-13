import React, { useState } from "react";

function Header() {

  return (
    <nav className="navbar-expand-md navbar-nav top-nav-alignment top-navbar">
<div className="d-md-none">
<a className="navbar-brand" href="https://scripbox.com/">
<img alt="Scripbox Logo" className="sbSvgFallback img-fluid" data-fallback="https://asset13.scripbox.com/assets/logo-78b16bd77b64dd2faba06016cab14b92e126c0e30e967c106f6cd01fe8851a75.png" src="https://asset11.scripbox.com/assets/logo-51c21f8c74532748f6acbc82e354cbe3feb2bb2f8eee49b4ecde59993b2528ba.svg" />
</a>
<div className="d-inline logo-country-separator"></div>
<div className="d-inline" id="country-switcher-mobile">
<div className="dropdown country-switcher-dropdown d-inline">
<button className="btn btn-default dropdown-toggle" data-display="static" data-toggle="dropdown" id="menu-mobile" type="button">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-india"></use>
</svg>
<span className="caret"></span>
</button>
<div className="overlay show-always"></div>
<ul aria-labelledby="menu-mobile" className="dropdown-menu" role="menu">
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="india_flag" data-country-id="india" data-country-link="/" data-country-name="India">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-india"></use>
</svg>
<div className="country-name">
India
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<li className="nri-divider" role="presentation">
<div className="text">For NRIs</div>
<div className="line"></div>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="canada_flag" data-country-id="canada" data-country-link="/ca/nri" data-country-name="Canada">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-canada"></use>
</svg>
<div className="country-name">
Canada
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="singapore_flag" data-country-id="singapore" data-country-link="/sg/nri" data-country-name="Singapore">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-singapore"></use>
</svg>
<div className="country-name">
Singapore
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="uae_flag" data-country-id="uae" data-country-link="/ae/nri" data-country-name="UAE">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-uae"></use>
</svg>
<div className="country-name">
UAE
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="united_states_flag" data-country-id="united_states" data-country-link="/us/nri" data-country-name="United States">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-united_states"></use>
</svg>
<div className="country-name">
United States
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="rest_of_the_world_flag" data-country-id="rest_of_the_world" data-country-link="/nri" data-country-name="Rest of the world">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-rest_of_the_world"></use>
</svg>
<div className="country-name">
Rest of the world
</div>
</div>
</a>
</li>
<div className="top-arrow"></div>
</ul>
</div>
</div>
</div>
<div className="d-block d-md-none mobile-toll-free-icon">
<a aria-label="Scripbox Toll Free Contact Number" className="hide-on-fhc mobile-call-me nav-link trigger-event" data-action="Click" data-category="Click-to-call" data-label="Toll Free Top Nav Icon - Mobile" href="tel:1800-102-1265">
<svg className="toll-free-sprite">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/footer-top-nav-svg.svg#footer-call"></use>
</svg>
</a>
</div>
<button aria-controls="topnavbar" aria-expanded="false" aria-label="Toggle navigation" className="collapsed d-md-none float-md-right hamburger-mobile-position hide-on-fhc navbar-toggler sb-navbar-hamburger trigger-event" data-action="menu hamburger" data-category="top nav" data-label="landing page" data-target="#topnavbar" data-toggle="collapse" type="button">
<span className="hamburger-icon-bar"></span>
<span className="hamburger-icon-bar"></span>
<span className="hamburger-icon-bar"></span>
</button>
<div className="container">
<div className="navbar-collapse collapse" id="topnavbar">
<a className="navbar-brand d-none d-md-block" href="https://scripbox.com/">
<img alt="Scripbox Logo" className="sbSvgFallback img-fluid"  src="/assets/brandname.png" />
</a>
<div className="logo-country-separator"></div>
<div className="" id="country-switcher-desktop">
<div className="dropdown country-switcher-dropdown">
<button className="btn btn-default dropdown-toggle" data-toggle="dropdown" id="menu-desktop" type="button" aria-expanded="false">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-india"></use>
</svg>
<span className="caret"></span>
</button>
<div className="overlay show-forced"></div>
<ul aria-labelledby="menu-desktop" className="dropdown-menu" role="menu">
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="india_flag" data-country-id="india" data-country-link="/" data-country-name="India">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-india"></use>
</svg>
<div className="country-name">
India
</div>
</div>
</a>
</li>
<li className="nri-divider" role="presentation">
<div className="text">For NRIs</div>
<div className="line"></div>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="canada_flag" data-country-id="canada" data-country-link="/ca/nri" data-country-name="Canada">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-canada"></use>
</svg>
<div className="country-name">
Canada
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="singapore_flag" data-country-id="singapore" data-country-link="/sg/nri" data-country-name="Singapore">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-singapore"></use>
</svg>
<div className="country-name">
Singapore
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="uae_flag" data-country-id="uae" data-country-link="/ae/nri" data-country-name="UAE">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-uae"></use>
</svg>
<div className="country-name">
UAE
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="united_states_flag" data-country-id="united_states" data-country-link="/us/nri" data-country-name="United States">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-united_states"></use>
</svg>
<div className="country-name">
United States
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<li role="presentation">
<a href="#" role="menuitem" tabindex="-1">
<div className="country-container country-container-js" data-country-flag="rest_of_the_world_flag" data-country-id="rest_of_the_world" data-country-link="/nri" data-country-name="Rest of the world">
<svg className="country-flag">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/nri-countries-svg.svg#country-rest_of_the_world"></use>
</svg>
<div className="country-name">
Rest of the world
</div>
<div className="country-message">
(For Resident Indians)
</div>
</div>
</a>
</li>
<div className="top-arrow"></div>
</ul>
</div>
</div>
<ul className="nav navbar-nav">
</ul>
<div className="float-md-right d-none d-md-block collapse navbar-collapse"></div>
<ul className="nav navbar-nav">
<li className="nav-item d-none d-md-block">
<a className="call-us-link hide-on-fhc nav-link trigger-event" data-action="Click" data-category="Click-to-call" data-label="Toll Free Top Nav - Desktop" href="tel:1800-102-1265">
<svg className="toll-free-sprite toll-free-sprite-desktop">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/footer-top-nav-svg.svg#footer-call"></use>
</svg>
1800-102-1265
</a>
</li>
<li className="nav-item">
<a className="hide-on-fhc nav-link false trigger-event" data-category="Learn" data-action="Click" data-label="Blog" href="#">BLOG</a>
</li>
<li className="nav-item">
<a rel="nofollow" className="hide-on-fhc nav-link trigger-event" data-category="Learn" data-action="menu login" data-label="LoginTopNav" href="https://scripbox.com/user/signin?ref=top-nav-signup">LOGIN</a>
</li>
<li className="nav-item">
<a rel="nofollow" className="hide-on-fhc nav-link sb-primary-cta-button trigger-event trigger-signup-data" data-category="Learn" data-action="menu signup" data-label="StartInvestingTopNav" data-signup_data="{ &quot;version&quot;: &quot;v1&quot; }" id="test-login-signup-button" href="https://scripbox.com/user/login?ref=top-nav-signup">SIGNUP</a>
</li>
<li className="nav-bar-divider"></li>
<li className="nav-item d-block d-md-none">
<a className="call-us-link hide-on-fhc mobile-call-me nav-link trigger-event" data-action="Click" data-category="Click-to-call" data-label="Toll Free Top Nav - Mobile" href="tel:1800-102-1265">
<svg className="toll-free-sprite">
<use xlinkHref="https://scripbox.com/assets/svg-sprite/footer-top-nav-svg.svg#footer-call"></use>
</svg>
1800-102-1265
</a>
</li>
</ul>
</div>
</div>
</nav>
  )
}

export default Header;
