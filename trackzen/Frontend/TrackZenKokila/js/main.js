/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

function toggleDropdown() {
    var dropdown = document.getElementById("analyticsDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Function to open the popup
function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}





   
  
  