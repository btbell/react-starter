import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

let BookList = [
	{"title": "The Sun Also Rises", "author": "Ernest Hemmingway", "pages": 333},
	{"title": "The Martian", "author": "Andy Weir",},
	{"title": "The Best and the Brightest", "author": "David Halberstam", "pages": 720},
]

{/*Set default values for function - further down, class defaults are set via static statement*/}
const Book = ({title= "No title provided", author= "No author provided", pages=0, freeBookmark}) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pgs.</p>
			<p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
		</section>
	)
}

const Hiring = () => 
	<div>
		<h4><em>The library is hiring! Go to www.foolibrary.com/jobs for more info.</em></h4>
	</div>

const NotHiring = () => 
	<div>
		<h4><em>The library is not hiring at this time. Go to www.foolibrary.com/jobs to stay up to date 
		on available positions in the future.</em></h4>
	</div>

class Library extends React.Component {

	static defaultProps = {
		books: [
			{"title": "Tahoe Tales",
			"author": "Chet Whitley",
			"pages": 1000
			}
		]
	}

	state = { 
		open: true,
		freeBookmark: true,
		hiring: false,
		data: [],
		loading: false
	}

	componentDidMount() {
		{/* console.log("The console is now mounted") */}
		this.setState({loading: true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
			.then(data => data.json())
			.then(data => this.setState({data, loading: false}))
	}

	componentDidUpdate() {
		console.log("The console just updated")
	}
	toggleOpenClosed = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}
	render() {
	{/* console.log is a way to check the state- uncomment console to view
		in the dev window of the Console tab.
		NOTE: commenting this way is a hack! */}
		{/*console.log(this.state)*/}
		const { books } = this.props
		return (
			<div>
				{this.state.loading
					? "loading..."
					: <div>
						{this.state.data.map(product => {
						return (
							<div key={product.id}>
								<h3>Library Product of the Week</h3>
								<h4>{product.name}</h4>
								<img alt={product.name} src={product.image} height={100} />
							</div>
						)
						})}
					</div>
				}
				{this.state.hiring ? <Hiring /> : <NotHiring />}
				<h3 className="openclose">The library is {this.state.open ? 'open!' : 'closed!'}</h3>
				<button onClick={this.toggleOpenClosed}>Set state here!</button>
				{books.map(
					(book, i) =>
						<Book
						key={i}
						title = {book.title} 
						author = {book.author} 
						pages = {book.pages}
						freeBookmark={this.state.freeBookmark} />
				)}
			</div>
		)

	}
}
	
Library.propTypes = {
	books: PropTypes.array
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	pages: PropTypes.number,
	freeBookmark: PropTypes.bool
}

render(
	<Library books={BookList} />,
	document.getElementById('root')
)