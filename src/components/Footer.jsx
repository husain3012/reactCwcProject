import { getDefaultNormalizer } from "@testing-library/react"
import { Link } from "react-router-dom";

function Footer(){
    return(
  <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Sitesoch</h4>
  	 			<ul>
  	 				<li><Link to="/">Home</Link></li>
  	 				<li><Link to="/about">About</Link></li>
  	 				<li><Link to="/">Pricing</Link></li>
  	 				<li><Link to="/privacy_policy">Privacy Policy</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get Help</h4>
  	 			<ul>
  	 				<li><a href="#">Shipping</a></li>
  	 				<li><a href="#">Returns</a></li>
  	 				<li><a href="#">Order Status</a></li>
  	 				<li><a href="#">Payment Options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<ul>
  	 				<li><a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate adipisci quia ab omnis id ipsum quae inventore </a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-google"></i></a>
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    )
}
export default Footer;