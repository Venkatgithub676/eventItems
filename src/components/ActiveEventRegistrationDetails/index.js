// Write your code here

import {Component} from 'react'

class ActiveEventRegistrationDetails extends Component {
  renderClosedReg = () => <h1>Hi</h1>

  render() {
    const {constants, status} = this.props
    switch (status) {
      case constants.closed:
        return this.renderClosedReg()
      case constants.registered:
        return this.renderReg()
      case constants.yetToReg:
        return this.renderYetToReg()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
