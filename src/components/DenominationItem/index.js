import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  onClickValue = () => {
    const {denominations, getDenominationValue} = this.props
    const {value} = denominations
    getDenominationValue(value)
  }

  render() {
    const {denominations} = this.props
    const {value} = denominations
    return (
      <li className="denomination-item">
        <button
          type="button"
          className="denomination-button"
          onClick={this.onClickValue}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
