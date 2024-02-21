import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  getDenominationValue = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    const fullName = 'Adharsh AV'
    const firstChar = fullName.slice(0, 1)
    return (
      <div className="app-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-first-char-container">
              <p className="profile-first-char">{firstChar}</p>
            </div>
            <h1 className="profile-name">{fullName}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="balance-number">
              {currentBalance}
              <br />
              <span className="in-rupees">In Rupees</span>
            </p>
          </div>

          <p className="withdraw-heading">Withdraw</p>
          <p className="withdraw-subtext">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominations={eachItem}
                key={eachItem.id}
                getDenominationValue={this.getDenominationValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
