import React from 'react'
import '../css/styles.css'
function Home() {
  return (
    <div>
    {/* Image Container */}
    <div className="image-container">
      <img src="images/Screenshot 2024-02-24 143855.png" alt="Image" />
      <div className="image-text">
        <h1>Understand The Impact Of Your Product Features</h1>
        <p>Collect product feature usage from your users and build custom reports to uncover insights and opportunities</p>
        <button className="my-button">Get Started</button>
      </div>
    </div>

    {/* Why Section */}
    <div className="why">
      <p style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '8px' }}>Why TrackZen</p>
      <p>Learn more about this</p>
    </div>

    {/* Card Content */}
    <div className="card-container">
      <div className="card">
        <img src="images/proces optimize.png" alt="Image 1" />
        <div className="card-content">
          <h4>Process Optimization</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas dicta, eveniet aspernatur culpa corrupti sed odit facere porro. Ratione et, at adipisci earum recusandae doloremque animi odio in facere.</p>
        </div>
      </div>
      <div className="card">
        <img src="images/Screenshot 2024-02-27 034935.png" alt="Image 2" />
        <div className="card-content">
          <h4>Report Analysing</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi quasi delectus reiciendis neque voluptatem tempore itaque blanditiis libero, quod hic mollitia rem veritatis sit praesentium repellendus sunt perferendis ad.</p>
        </div>
      </div>
      <div className="card">
        <img src="images/monitoring.png" alt="Image 3" />
        <div className="card-content">
          <h4>Employee Monitoring</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem illo eveniet ratione nostrum, ex deleniti unde, in tempora mollitia necessitatibus adipisci qui, ducimus reprehenderit impedit quas aliquam quia fugiat!</p>
        </div>
      </div>
      <div className="card">
        <img src="images/screentime.png" alt="Image 4" />
        <div className="card-content">
          <h4>Screen Time</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat non impedit eligendi vero? Blanditiis, commodi? Recusandae veritatis ab totam doloremque nisi repellendus non voluptatum laborum, consectetur adipisci omnis quo.</p>
        </div>
      </div>
    </div>

    {/* Ready Section */}
    <div className="red">
      <p style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '8px' }}>Ready to try it out?</p>
      <p>Learn more about this</p>
      <button style={{ display: 'block', margin: '0 auto', border: 'none', borderRadius: '15px', backgroundColor: '#1b1b1b', color: '#ffffff', padding: '10px 25px' }}>Get Started</button>
    </div>
  </div>
  )
}

export default Home