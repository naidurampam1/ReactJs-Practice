import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0} //state method using bcz continues change value
  onIncrement = () => {
    this.setState(prevState => {
      //updation of state
      //setState calling state method use kabate set state use cheyali bcz previous value setstate lo untadhi
      //preState lo function or object adhi ina use chyochu
      return {count: prevState.count + 1} // increse counter value
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }
  render() {
    const {count} = this.state //counter props ni accessing
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onDecrement} className="button" type="button">
            Decrease
          </button>
          <button onClick={this.onIncrement} className="button" type="button">
            Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
