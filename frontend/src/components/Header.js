import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		<h1 className="header">MapMyPain</h1>

		<nav>
			<Link to="/"> Dashboard </Link>
			<Link to="/new-entry"> New Entry </Link>
			<Link to="/calendar"> Calendar </Link>
		</nav>
	</header>
)

export default Header
