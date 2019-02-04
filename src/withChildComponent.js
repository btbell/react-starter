import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pgs.</p>
		</section>
	)
}

const Library = () => {
	return (
		<div>
			<Book
				title = "The Sun Also Rises" author ="Ernest Hemmingway"
				pages = {260} />
			<Book
				title = "White Teeth" author ="Zadie Smith"
				pages = {480} />
			<Book
				title = "Cats Cradle" author ="Kurt Vonnegut"
				pages = {304} />
		</div>
	)
}

render(
	<Library />,
	document.getElementById('root')
)