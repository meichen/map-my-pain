import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header>
				<h1>MapMyPain</h1>

				<nav>
					<Link to="/"> Dashboard </Link>
					<Link to="/new-entry"> New Entry </Link>
					<Link to="/calendar"> calendar </Link>
				</nav>
			</header>
		)
	}
}
export default Header
