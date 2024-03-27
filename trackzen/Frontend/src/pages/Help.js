import React from 'react'
import '../css/styles.css'
function Help() {
  return (
    <div>
      <div className="help">
        <h1>How can we help?</h1>
        <h4>Get in touch with our support team</h4> 
      </div>

      <div className="button-container">
        <div className="button-item">
          <button><i className="material-icons" style={{ fontSize: '36px' }}>chat_bubble_outline</i></button>
          <span className="button-text">Support</span>
        </div>

        <div className="button-item">
          <button><i className="material-icons" style={{ fontSize: '36px' }}>call</i></button>
          <span className="button-text">Phone</span>
        </div>

        <div className="button-item">
          <button><i className="material-icons" style={{ fontSize: '36px' }}>forum</i></button>
          <span className="button-text">Knowledge base</span>
        </div>

        <div className="button-item">
          <button><i className="material-icons" style={{ fontSize: '36px' }}>supervisor_account</i></button>
          <span className="button-text">Community</span>
        </div>

        <div className="button-item">
          <button><i className="material-icons" style={{ fontSize: '36px' }}>touch_app</i></button>
          <span className="button-text">What's new</span>
        </div>
      </div>
    </div>
  )
}

export default Help