import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
	total: 50,
	powder: 20,
	backcountry: 10,
	goal: 100
}

const getPercent = decimal => {
	return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) => {
	return getPercent(total/goal)
}

const SkiDayCounter = (props) => {
	return (
		<section>
			<h3>Ski Days</h3>
			<div>
				<p>Total Days: {props.total}</p>
			</div>
			<div>
				<p>Powder Days: {props.powder}</p>
			</div>
			<div>
				<p>Backcountry Days: {props.backcountry}</p>
			</div>
			<div>
				<p>Goal Progress: {props.goal}</p>
			</div>
		</section>
	)
}

render(
	<SkiDayCounter
		total={skiData.total}
		powder={skiData.powder}
		backcountry={skiData.backcountry}
		goal={skiData.goal} />, 
	document.getElementById('root'))