import React from 'react'
import ReactDOM from 'react-dom'


var style= {
	color: 'red',
	fontFamily: 'Arial'
}



ReactDOM.render(
	<div style={style}>
	<h1 id="foo">Yo!</h1>
	<p class='bar'>Have a great day!</p>
	</div>,
	document.getElementById('root')
	)