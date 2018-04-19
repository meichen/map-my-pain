import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'

import 'react-datepicker/dist/react-datepicker.css'

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

	handleChange = key => e =>
		this.setState({
			form: {
				// spreads the other form props that are not being touch
				...this.state.form,

				// date picker doesn't pass an event, only the value.
				// same function reusable for all fields
				[key]: e.target ? e.target.value : e
			}
		})

	handleSubmit(e) {
		e.preventDefault()
		axios({
			url: 'http://localhost:4000/journal/create',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			//need to make sure that we convert the fields to a json object
			data: JSON.stringify(this.state.form)
		}).then(res => {
			console.log(res)
		})
	}

	render() {
		const { form } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Date:</label>
					<DatePicker
						selected={form.date}
						onChange={this.handleChange('date')}
					/>
				</div>
				<div>
					<label>Time:</label>
					<input
						type="text"
						value={form.time}
						onChange={this.handleChange('time')}
					/>
				</div>
				<div>
					<label>Description:</label>
					<br />
					<textarea
						value={form.description}
						onChange={this.handleChange('description')}
					/>
				</div>

				<input type="submit" value="Submit" />
			</form>
		)
	}
}
export default NewEntry
