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

const Library = ( {books}) => {
	return (
		<div>
			{books.map(
				(book, i) =>
					<Book
					key={i}
					title = {book.title} 
					author = {book.author} 
					pages = {book.pages} />)}
		</div>
	)
}

render(
	<Library books={BookList} />,
	document.getElementById('root')
)