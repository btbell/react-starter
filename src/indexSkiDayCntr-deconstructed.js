import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

class SkiDayCounter extends Component {
	render() {
		const {total, powder, backcountry, goal} = this.props
		return (
			<section>
				<h3>Ski Days</h3>
				<div>
					<p>Total Days: {total}</p>
				</div>
				<div>
					<p>Powder Days: {powder}</p>
				</div>
				<div>
					<p>Backcountry Days: {backcountry}</p>
				</div>
				<div>
					<p>Goal: {goal}</p>
				</div>
			</section>
		)
	}
}	

render(
	<SkiDayCounter
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal} />, 
	document.getElementById('root'))