import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Footer.css";
import { Navbar, Container } from 'react-bootstrap';

import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';


export class Footer extends Component {
  render() {
    return (
    // <div className='bigdiv'>
    //   <div className='smaalDiv'>


    //     <div className='foterNavbar'>
    //       <ol>
    //         <li>
    //           <p className='Resources' >Resources</p>
    //         </li>
    //         <li>
    //           <a href="/store" className='link'>Store</a>
    //         </li>
    //         <a href="/news" className='link'>News</a>
    //         <li>
    //           <a href="/aboutUs" className='link'>About us</a>
    //         </li>
    //       </ol>
    //     </div>

    //     <div className='copy'>
    //       <p className='copuright' >
    //         &copy;2021,  Gamers, Inc. All rights reserved.Gamers , Gamers Games, the Gamers Games logo, Inc. in the Jordan and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Gamers Games International.
    //       </p>

    //     </div>

    //     <div className='social' style={{ width: '80%' }}>
    //       <FaFacebook className='anas' />
    //       <FaTwitter className='anas' />
    //       <FaYoutube className='anas' />
    //     </div>


    //   </div>
    //   </div>


    
<div>
<section>Footer Example 4</section>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>


	

      </div>

    );
  }
}

export default Footer;



