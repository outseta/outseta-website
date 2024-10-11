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

// Change header background color on scroll 
window.addEventListener('scroll', function() {
  const root = document.documentElement;
  
  if (window.scrollY > 0) {
    root.style.setProperty('--component-navbar--background-color', 'var(--colors-white--1000)');
    root.style.setProperty('--component-navbar--padding-top', '0.5rem');
  } else {
    root.style.setProperty('--component-navbar--background-color', 'var(--colors-white--300)');
    root.style.setProperty('--component-navbar--padding-top', '1.5rem');
  }
});
