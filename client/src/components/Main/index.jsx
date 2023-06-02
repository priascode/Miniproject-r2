import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import './Header.css';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div>
			<header className="header">
				<div className="header-1">

					<NavLink to="/"  className="logo">  <i className ="fas fa-book"> </i>  bookly</NavLink>

					

					<div className="icons">
					
							{/* <Link to="/" className="fas fa-heart"></Link>
							<Link to="/" className="fas fa-shopping-cart"></Link> */}
							<button className="white_btn" onClick={handleLogout}>
								Logout
						</button>
					
					</div>
				</div>
				<div className='header-2'>
					<nav className="navbar">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/books">featured</Link></li>
						<li><Link to="/add">arrivals</Link></li>
						<li><Link to="/chats">reviews</Link></li>
					</nav>
				</div>
				<nav class="bottom-navbar">
					<Link  to="/" class="fas fa-home" ></Link>
					<Link to="/books" class="fas fa-list"></Link>
					<Link to="/add" class="fas fa-tags"></Link>
					<Link  to="/chats" class="fas fa-comments"></Link>
				</nav>
				
			</header>
			
		</div>

	);
};

export default Main;
