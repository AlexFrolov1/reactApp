import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return (
			<header className="header"> 
			
			{this.props.items.map((item, index) =>
				<a href={item.link} key={index} >{item.label}</a>
				)}
				</header>
				);
		}
	}

	export default Header;
