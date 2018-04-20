import React from 'react'
import moment from 'moment'
import './Entry.css'

// Used moment to format date
// https://momentjs.com/docs/#/displaying/format/
export const Entry = ({ time, description }) => (
	<div className="entry">
		<summary>
			<span className="time">{moment(time).format('hh:mm A')} &ndash; </span>
			{description}
		</summary>
	</div>
)

export default Entry
