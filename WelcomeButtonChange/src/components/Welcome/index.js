// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  clickButton = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank You! Happy Learning</p>
          <div className="btn">
            {isSubscribed ? (
              <button
                type="button"
                className="button"
                onClick={this.clickButton}
              >
                Subscribe
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={this.clickButton}
              >
                Subscribed
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
