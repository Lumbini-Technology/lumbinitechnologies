// JavaScript to manage toggle redirection and default to index.html
const toggleInput = document.getElementById('toggle-input');
const statusMessage = document.getElementById('statusMessage');

// Function to handle toggle changes
function handleToggleChange() {
  if (toggleInput.checked) {
    statusMessage.textContent = 'Status: NIT';
    setTimeout(() => {
      if (window.location.pathname !== '/N_IT.html') {
        window.location.href = 'N_IT.html';
      }
    }, 100);
  } else {
    statusMessage.textContent = 'Status: IT';
    setTimeout(() => {
      if (window.location.pathname !== '/index.html') {
        window.location.href = 'index.html';
      }
    }, 100);
  }
}

// Initialize default page on load based on current path
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    toggleInput.checked = false; // Set toggle to IT by default
    statusMessage.textContent = 'Status: IT';
  } else if (window.location.pathname === '/N_IT.html') {
    toggleInput.checked = true; // Set toggle to NIT by default
    statusMessage.textContent = 'Status: NIT';
  }
});

// Event listener for the toggle change
toggleInput.addEventListener('change', handleToggleChange);
