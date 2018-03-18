import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import Trending from './Trending';
import Rating from './Rating';
import Contact from './Contact';
//import Logo from '../src/assets/images/intro-plate.png';
import Image from '../src/assets/images/green-plate.jpg';
import './index.css';

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1>Food Recipe Search App</h1>

					<ul className="header">
						<li>
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/trending">Trending</NavLink>
						</li>
						<li>
							<NavLink to="/rating">By Rating</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact Us</NavLink>
						</li>
					</ul>

					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/trending" component={Trending} />
						<Route path="/rating" component={Rating} />
						<Route path="/contact" component={Contact} />
					</div>

					<div className="img">
						<img src={Image} alt="" />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
