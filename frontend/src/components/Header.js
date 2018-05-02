import React from 'react'
import { Link } from 'react-router-dom'

// used icons from fontawesome
// https://fontawesome.com/icons?d=gallery
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import Calendar from '@fortawesome/fontawesome-free-solid/faCalendarAlt'
import './Header.css'

const Header = () => (
	<header className="header">
		<div className="wrapper">
			<div className="site-logo">
				<Link to="/">
					<FontAwesomeIcon icon={ChartLine} /> MapMyPain
				</Link>
			</div>
			<nav className="nav">
				<Link to="/">
					<FontAwesomeIcon icon={ChartLine} />
				</Link>
			</nav>
		</div>
	</header>
)

export default Header
