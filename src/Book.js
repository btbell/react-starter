import React from 'react'

{/*Set default values for function - further down, class defaults are set via static statement*/}
export const Book = ({title= "No title provided", author= "No author provided", pages=0, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pgs.</p>
			<p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
		</section>
	)
}