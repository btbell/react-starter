import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h1 style={{color: this.props.color}}>{this.props.msg}</h1>
				<p>I'll be back in {this.props.minutes} minutes.</p>
			</div>
		)
	}
}

ReactDOM.render(<Message color="blue" msg="how are you???" minutes={10} />, document.getElementById('root'))