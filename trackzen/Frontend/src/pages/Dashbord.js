import React from 'react'
import '../css/styles.css'
function Dashbord() {
  return (
    <div>
      {/* Button Container */}
      <div className="button-container">
        <button className="my-buttondash">Dashboard</button>
        <button className="my-buttondash">Screenshots</button>
        <button className="my-buttondash">Network</button>
        <button className="my-buttondash">Device Info</button>
        <button className="my-buttondash">Report</button>
      </div>

      {/* Option Section */}
      <div className="option1">
        <h1>Screenshots</h1>
        <hr />
        <img src="images/proces optimize.png" alt="Screenshot 1" />
        <img src="images/Screenshot 2024-02-24 143855.png" alt="Screenshot 2" />
        <img src="images/Screenshot 2024-02-19 201800 copy.jpg" alt="Screenshot 3" />
        <img src="images/monitoring.png" alt="Screenshot 4" />
      </div>
      <div className="option2">
        <h1>Network</h1>
        <hr />
        <img src="images/Screenshot 2024-02-29 105418.png" alt="Network Screenshot" />
      </div>
      <div className="option3">
        <h1>Device Info</h1>
        <hr />
        <img src="images/Screenshot 2024-02-29 105951.png" alt="Device Info Screenshot" />
      </div>
      <div className="option4">
        <h1>Report</h1>
        <hr />
        <img src="images/Screenshot 2024-02-24 143855.png" alt="Report Screenshot" />
      </div>
    </div>
  )
}

export default Dashbord