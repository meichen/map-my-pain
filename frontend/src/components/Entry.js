import React from 'react'
import moment from 'moment'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import DeleteIcon from '@fortawesome/fontawesome-free-solid/faTimes'
import './Entry.css'

// Used moment to format date
// https://momentjs.com/docs/#/displaying/format/
export const Entry = ({ time, description, deleteHandler }) => (
	<div className="entry">
		<time>{moment(time).format('hh:mm A')}</time>
		<summary>{description}</summary>
		<button onClick={deleteHandler}>
			<FontAwesomeIcon icon={DeleteIcon} />
		</button>
	</div>
)

export default Entry
