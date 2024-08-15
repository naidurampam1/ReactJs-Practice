import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naidu Rampam',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Suji Gundabattula',
    role: 'Product Manager',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Uji Patel',
    role: 'UX Designer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Ida Murphy',
    role: 'Data Scientist',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Liu Chen',
    role: 'Project Manager',
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Dudu Kim',
    role: 'Front-end Developer',
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Yuji Suzuki',
    role: 'Back-end Developer',
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Midu Tando',
    role: 'DevOps Engineer',
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Kidu Lee',
    role: 'Security Analyst',
  },
  {
    uniqueNo: 10,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Suji Park',
    role: 'Business Analyst',
  },
  {
    uniqueNo: 11,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Bidu Garcia',
    role: 'Database Administrator',
  },
  {
    uniqueNo: 12,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Lidu Lopez',
    role: 'Systems Architect',
  },
  {
    uniqueNo: 13,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Jidu Smith',
    role: 'IT Consultant',
  },
  {
    uniqueNo: 14,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Ryuji Tanaka',
    role: 'Machine Learning Engineer',
  },
  {
    uniqueNo: 15,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Hidu Yang',
    role: 'Network Engineer',
  },
  {
    uniqueNo: 16,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Shuji Naito',
    role: 'Quality Assurance Specialist',
  },
  {
    uniqueNo: 17,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Yidu Zhen',
    role: 'Cloud Engineer',
  },
  {
    uniqueNo: 18,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Kazu Ueno',
    role: 'Scrum Master',
  },
  {
    uniqueNo: 19,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Hui Chen',
    role: 'Technical Writer',
  },
  {
    uniqueNo: 20,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Miki Ono',
    role: 'Web Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUserData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)
    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          placeholder="Enter A Search Name"
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              onDeleteUser={this.onDeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
