import React from 'react'
import '../css/styles.css'
function Navbar() {
  return (
    <div class="navbar">
         <div class="navbar-logo">
         <img src="./images/trackzen1.jpg" alt="Your Logo"/> 

         </div>
         <ul class="navbar-nav">
           <li><a href="/">Home</a></li>
           <li><a href="/dash">Dashboard</a></li>
           <li class="dropdown">
         <a href="/any" class="dropbtn" onclick="toggleDropdown()">Analytics &#9662;</a>
             <div class="dropdown-content" id="analyticsDropdown">
               <a href="#">Screenshots</a>
               <a href="#">Network</a>
               <a href="#">Device Info</a>
             <a href="/help">Report</a>
       
               
             </div>
           </li>
           <li><a href="/help">Help</a></li>
           <li><a href="/feedback">Feedback</a></li>
           <li><a href="/signup">Login / Signup</a></li>
         </ul>
       </div>
  )
}

export default Navbar