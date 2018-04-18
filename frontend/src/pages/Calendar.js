import React from 'react'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const Calendar = () => (
	<div>
		<BigCalendar events={[]} startAccessor="startDate" endAccessor="endDate" />
	</div>
)

export default Calendar
