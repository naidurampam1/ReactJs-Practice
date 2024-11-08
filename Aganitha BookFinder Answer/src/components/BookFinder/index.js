import {Component} from 'react'
import './index.css'

class BookFinder extends Component {
  state = {
    books: [], // List of books fetched from the API
    query: '', // User input for the book search
    error: '', // Error messages if any issue occurs during the search
    viewBookDetails: false, // if book details are shown is true
    loading: false, // show the loading spinner
  }

  // Handle "Enter" key press to trigger the search function
  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.searchBooks()
    }
  }

  // Function to handle the search button click
  searchBooks = async () => {
    try {
      this.setState({error: '', loading: true}) // Clear any previous error and show loading spinner
      const {query} = this.state
      const lowerCaseQuery = query.toLowerCase() // Case-insensitive search

      const response = await fetch(
        `https://openlibrary.org/search.json?title=${lowerCaseQuery}`,
      )
      const data = await response.json() // getting string data

      if (data.docs.length === 0) {
        this.setState({error: 'Invalid book data.', loading: false}) // Handle no results
      } else {
        this.setState({books: data.docs, viewBookDetails: true, loading: false}) // Store book data and hide loading spinner
      }
    } catch (error) {
      this.setState({error: 'Please enter valid book details.', loading: false}) // Hide loading spinner on error
      console.error('Error fetching book data:', error)
    }
  }

  // Handle input change in the search bar
  handleInputChange = event => {
    this.setState({query: event.target.value})
  }

  // Handle back button click to go back to the search page
  goBackToSearch = () => {
    this.setState({viewBookDetails: false, books: [], query: ''})
  }

  render() {
    const {books, query, error, viewBookDetails, loading} = this.state

    return (
      <div
        className={`bg-container ${books.length === 0 ? 'bg-gradient' : ''}`}
      >
        {/* Main heading */}
        <h1 className="heading">Book Finder</h1>
        <p className="sub-title">
          One stop destination for all your favorite books. Find any book here.
        </p>

        {/* Back button */}
        {viewBookDetails && (
          <button
            className="back-button"
            type="button"
            onClick={this.goBackToSearch}
          >
            Back to Search
          </button>
        )}

        {/* Search input and button */}
        {!viewBookDetails && (
          <div className="search-container">
            <input
              className="input-book"
              type="text"
              placeholder="Search your book title..."
              value={query}
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
            />
            <button type="button" onClick={this.searchBooks}>
              Search
            </button>
          </div>
        )}

        {/* Loading spinner */}
        {loading && <div className="loading-spinner" />}

        {/* Error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Book list display */}
        {viewBookDetails && books.length > 0 && (
          <div className="book-list">
            {books.map(book => {
              const uniqueKey = book.isbn
                ? book.isbn[0]
                : `${book.title}-${book.first_publish_year}`
              return (
                <div key={uniqueKey} className="book-item">
                  <h2>{book.title}</h2>
                  <div>
                    <span className="span-color">Author: </span>
                    <span>
                      {book.author_name
                        ? book.author_name.join(', ')
                        : 'Unknown'}
                    </span>
                  </div>
                  <div>
                    <span className="span-color">Publisher: </span>
                    <span>
                      {book.publisher ? book.publisher.join(', ') : 'Unknown'}
                    </span>
                  </div>
                  <div>
                    <span className="span-color">First Published: </span>
                    <span>{book.first_publish_year || 'Unknown'}</span>
                  </div>
                  <div>
                    <span className="span-color">ISBN: </span>
                    <span>{book.isbn ? book.isbn.join(', ') : 'N/A'}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* App description */}
        {!viewBookDetails && books.length === 0 && !loading && (
          <div className="container">
            {/* Main container for description sections */}
            <section className="section">
              <h2>Purpose</h2>
              <p>
                The Book Finder app is intended for users who need an efficient
                way to search for books related to their studies, interests, or
                hobbies. This app makes it easy to find relevant books and view
                basic details in a clean, organized format.
              </p>
            </section>

            <section className="section">
              <h2>Key Features</h2>
              <ul>
                <li>
                  <span className="highlight">Search Functionality:</span> Users
                  can search for books by title.
                </li>
                <li>
                  <span className="highlight">Detailed Book Information:</span>
                  <ul>
                    <li>
                      <span className="sub-highlight">Title:</span> Prominently
                      displayed.
                    </li>
                    <li>
                      <span className="sub-highlight">Author(s):</span> Lists
                      contributors.
                    </li>
                    <li>
                      <span className="sub-highlight">Cover Image:</span> Shows
                      if available.
                    </li>
                    <li>
                      <span className="sub-highlight">
                        Year of Publication:
                      </span>{' '}
                      Displays publication year.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="highlight">Responsive UI Design:</span>{' '}
                  Optimal on both desktop and mobile devices.
                </li>
                <li>
                  <span className="highlight">Loading State:</span> Displays a
                  loading spinner when fetching data.
                </li>
                <li>
                  <span className="highlight">Error Handling:</span> Shows a
                  message if no results are found or an error occurs.
                </li>
              </ul>
            </section>

            <section className="section">
              <h2>User Workflow</h2>
              <ol>
                <li>
                  Enter a book title in the search bar and click{' '}
                  <span className="highlight">Search</span>.
                </li>
                <li>
                  The app sends a request to the Open Library Search API based
                  on the title.
                </li>
                <li>
                  Once data is fetched:
                  <ul>
                    <li>
                      If books are found, they display with title, author(s),
                      publication year, and cover image.
                    </li>
                  </ul>
                </li>
                <li>Users can search for multiple books in one session.</li>
              </ol>
            </section>

            <section className="section">
              <h2>Deployment</h2>
              <p>
                The Book Finder app is deployed on a free hosting platform (such
                as CodeSandbox or StackBlitz).
              </p>
            </section>
          </div>
        )}
      </div>
    )
  }
}

export default BookFinder
