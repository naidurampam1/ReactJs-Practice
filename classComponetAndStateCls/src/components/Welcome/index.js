import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <h1>
        Hello {name} ur age is {age}
      </h1>
    )
  }
}

export default Welcome
