// Write your code here

import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitial = () => (
    <div className="initial-con">
      <p className="initial-reg">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderClosedReg = () => (
    <div className="active-reg-dtls">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-close-img"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="reg-closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderReg = () => (
    <div className="active-reg-dtls">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="reg-img"
      />
      <h1 className="reg-para">You have already registered for the event</h1>
    </div>
  )

  renderYetToReg = () => (
    <div className="active-reg-dtls">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-reg-img"
      />
      <p className="yet-to-reg-para">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button type="button" className="reg-here-btn">
        Register Here
      </button>
    </div>
  )

  render() {
    const {constants, status} = this.props
    switch (status) {
      case constants.initial:
        return this.renderInitial()
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
