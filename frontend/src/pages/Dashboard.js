import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './Dashboard.css'
import NewEntryBtn from '../components/NewEntryBtn'
import Entry from '../components/Entry'

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: []
		}
	}

	componentDidMount() {
		axios({
			url: `${process.env.REACT_APP_API}/journal`,
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then(res => {
			this.setState({ entries: res.data })
		})
	}

	// Used moment to format date
	// https://momentjs.com/docs/#/displaying/format/
	getMonthLabel(current, previous) {
		const currentMonth = moment(current.date)
		const previousMonth = previous ? moment(previous.date).month() : 0

		// only return the month label if it was not the same as the previous month
		if (currentMonth.month() !== previousMonth) {
			return <div className="date-month">{currentMonth.format('MMMM')}</div>
		}
	}

	// Used moment to format date
	// https://momentjs.com/docs/#/displaying/format/
	getDayLabel(current, previous) {
		const currentDay = moment(current.date)
		const previousDay = previous ? moment(previous.date).day() : 0

		// only return the day label if it was not the same as the previous day
		if (currentDay.day() !== previousDay) {
			return (
				<div className="date-day">
					<div className="date-day-number">{currentDay.format('DD')}</div>
					<div className="date-day-word">{currentDay.format('ddd')}</div>
				</div>
			)
		}
	}

	render() {
		const { entries } = this.state
		return (
			<main className="dashboard wrapper">
				{entries.map((entry, i) => (
					<div key={entry._id}>
						{this.getMonthLabel(entry, entries[i - 1])}
						{this.getDayLabel(entry, entries[i - 1])}
						<Entry {...entry} />
					</div>
				))}

				<NewEntryBtn />
			</main>
		)
	}
}

export default Dashboard
