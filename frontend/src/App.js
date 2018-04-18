import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import NewEntry from './pages/NewEntry'
import Calendar from './pages/Calendar'

const App = () => (
	<Fragment>
		<Header />
		<main>
			<Switch>
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/new-entry" component={NewEntry} />
				<Route exact path="/calendar" component={Calendar} />
			</Switch>
		</main>
	</Fragment>
)

export default App
