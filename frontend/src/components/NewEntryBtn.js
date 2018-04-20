import React from 'react'
import { Link } from 'react-router-dom'

// used icons from fontawesome
// https://fontawesome.com/icons?d=gallery
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Plus from '@fortawesome/fontawesome-free-solid/faPlus'
import './NewEntryBtn.css'

export const NewEntryBtn = () => (
	<Link to="/new-entry" className="new-entry-btn">
		<FontAwesomeIcon icon={Plus} />
	</Link>
)

export default NewEntryBtn
