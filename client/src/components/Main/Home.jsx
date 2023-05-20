import React from 'react'
import './Header.css'
import { Link ,} from 'react-router-dom';
import Main from '.';

const Home = () => {
  return (
    <div>
        <Main />
        <div className="home" id="home">
			<div className="row">

				<div className="content">
					<h3> <b>old Books for free</b> </h3>
					<p>Get the used books free at your doorstep...</p>
					<Link to="/" className="btn">  Explore</Link>
				</div>

				<div className="swiper books-slider">
					<div className="swiper-wrapper">
					<Link to="/" className="swiper-slide"> <img src={require("../images/img1.jpg")} alt=""/></Link>
					<Link to="/" className="swiper-slide"> <img src={require("../images/img2.jpg")} alt=""/></Link>
					<Link to="/" className="swiper-slide"> <img src={require("../images/img3.jpg")} alt=""/></Link>
					<Link to="/" className="swiper-slide"> <img src={require("../images/img4.jpg")} alt=""/></Link>
					<Link to="/" className="swiper-slide"> <img src={require("../images/img5.jpg")} alt=""/></Link>
					<Link to="/" className="swiper-slide"> <img src={require("../images/img6.jpg")} alt=""/></Link>
					</div>
					<img src={require("../images/stand-removebg-preview.png")} className="stand" alt='' />
				</div>
				
			</div>
		</div> 
     <div className="icons-container">

        <div className="icons">
            <i className="fas fa-plane"></i>
            <div className="content">
                <h3> Free Shipping </h3>
                <p>  ghajfhggn</p>

            </div>
        </div>

        <div className="icons">
            <i className="fas fa-lock"></i>
            <div className="content">
                <h3> Secure payments</h3>
                <p>  100 secure payments</p>

            </div>
        </div>

        <div className="icons">
            <i className="fas fa-redo-alt"></i>
            <div className="content">
                <h3> easy returns </h3>
                <p>  ghajfhggn</p>

            </div>
        </div>

        <div className="icons">
            <i className="fas fa-headset"></i>
            <div className="content">
                <h3> 24/7 support </h3>
                <p>  call us   </p>

            </div>
        </div>

    </div>
    </div>
  )
}

export default Home
