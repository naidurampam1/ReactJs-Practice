// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isColorMode: true}

  clickButton = () => {
    this.setState(prevState => ({
      isColorMode: !prevState.isColorMode,
    }))
  }

  render() {
    const {isColorMode} = this.state
    const containerStyle = {
      backgroundColor: isColorMode ? 'black' : 'white', // White for light mode, black for dark mode
      color: isColorMode ? 'white' : 'black', // Black text for light mode, white text for dark mode
    }

    return (
      <div className="bg-container">
        <div className="card-container" style={containerStyle}>
          <h1>Click To Change Mode</h1>
          <div className="btn">
            {isColorMode ? (
              <button
                type="button"
                className="button"
                onClick={this.clickButton}
              >
                Light Mode
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={this.clickButton}
              >
                Dark Mode
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
