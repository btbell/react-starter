import React, { Component } from 'react'
import { render } from 'react-dom'

let BookList = [
	{"title": "The Sun Also Rises", "author": "Ernest Hemmingway", "pages": 260},
	{"title": "The Martian", "author": "Andy Weir", "pages": 387},
	{"title": "The Best and the Brightest", "author": "David Halberstam", "pages": 720},
]


const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pgs.</p>
		</section>
	)
}

class Library extends React.Component {
		constructor(props) {
		super(props)
		this.state = {
			open:true
		}
	}
	render() {
	{/* console.log is a way to check the state- uncomment console to view
		in the dev window of the Console tab.
		NOTE: commenting this way is a hack! */}
		{/*console.log(this.state)*/}
		const { books } = this.props
		return (
			<div>
				<h3 className="openclose">The library is {this.state.open ? 'open!' : 'closed!'}</h3>
				{books.map(
					(book, i) =>
						<Book
						key={i}
						title = {book.title} 
						author = {book.author} 
						pages = {book.pages} />
				)}
			</div>
		)

	}
}
	

render(
	<Library books={BookList} />,
	document.getElementById('root')
)