import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import DateTime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

class NewEntry extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				date: moment(),
				time: moment(),
				description: ''
			}
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// updates the state value of the form for what whatever key is passed
	handleChange = key => e =>
		this.setState({
			form: {
				// spreads the other form props that are not being touched
				...this.state.form,

				// date picker doesn't pass an event, only the value.
				// this let me use the same function for all fields
				[key]: e.target ? e.target.value : e
			}
		})

	handleSubmit(e) {
		e.preventDefault()
		axios({
			url: `${process.env.REACT_APP_API}/journal/create`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			// need to make sure that we convert the fields to a pure json object
			data: JSON.stringify(this.state.form)
		}).then(res => {
			// redirect back to dashboard
			this.props.history.push('/')
		})
	}

	render() {
		const { form } = this.state
		return (
			<main className="wrapper">
				<form className="form" onSubmit={this.handleSubmit}>
					<h1>New Entry</h1>

					{/* Used https://github.com/YouCanBookMe/react-datetime */}
					<DateTime
						timeFormat={false}
						value={form.date}
						onChange={this.handleChange('date')}
						placeholder="Date"
					/>
					<br />
					<DateTime
						dateFormat={false}
						value={form.time}
						onChange={this.handleChange('time')}
						placeholder="Time"
					/>
					<br />
					<textarea
						value={form.description}
						onChange={this.handleChange('description')}
						placeholder="Description"
					/>
					<br />
					<br />
					<Link to="/" className="btn">
						Cancel
					</Link>
					<button type="submit" className="btn">
						Create New Entry
					</button>
				</form>
			</main>
		)
	}
}
export default withRouter(NewEntry)
