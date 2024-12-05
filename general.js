// // Custom context menu
// const contextMenuTrigger = document.querySelector(".context-menu-trigger");
// const contextMenu = document.querySelector(".context-menu");

// contextMenuTrigger.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
  
//   // Show the context menu with a smooth opacity transition
//   contextMenu.style.visibility = "visible";
//   contextMenu.classList.add("cc-show");
// });

// document.body.addEventListener("click", function () {
//   contextMenu.classList.remove("cc-show"); // Remove the class to hide the menu
  
//   // Wait for the opacity transition to finish (e.g., 300ms) before hiding the element
//   setTimeout(function () {
//     contextMenu.style.visibility = "hidden";
//   }, 200); // Match the duration of the opacity transition
// });

// Check if user has visited Webflow migration page
// If they have, show offer CTA
if (localStorage.getItem('visitedWebflowMigrationPage') === 'true') {
    console.log('Visited page');
    document.querySelector('#migrateWebflow').style.display = 'block'; // Show the Webflow migrate CTA
    document.querySelector('#migrateGeneral').style.display = 'none'; // Hide the general migrate CTA
} else {
    document.querySelector('#migrateWebflow').style.display = 'none'; // Hide the element
}

