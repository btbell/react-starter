import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h1>{this.props.msg}</h1>
			</div>
		)
	}
}

ReactDOM.render(<Message msg="how are you???" />, document.getElementById('root'))