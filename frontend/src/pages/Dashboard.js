import React, { Component } from 'react'
import axios from 'axios'

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			entries: []
		}
	}
	componentDidMount() {
		axios({
			url: 'http://localhost:4000/journal',
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}).then(res => {
			this.setState({ entries: res.data })
		})
	}

	render() {
		const { entries } = this.state
		return (
			<div>
				<h1>Dashboard</h1>
				<ul>
					{entries.map(entry => (
						<li>
							<div>
								{entry.date} &ndash; {entry.time}
							</div>
							<div>{entry.description}</div>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Dashboard
