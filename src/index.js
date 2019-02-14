import React from 'react'
import { render } from 'react-dom'
import Library from './Library'

let BookList = [
	{"title": "The Sun Also Rises", "author": "Ernest Hemmingway", "pages": 333},
	{"title": "The Martian", "author": "Andy Weir",},
	{"title": "The Best and the Brightest", "author": "David Halberstam", "pages": 720},
]

render(
	<Library books={BookList} />,
	document.getElementById('root')
)