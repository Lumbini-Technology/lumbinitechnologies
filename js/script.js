Script:
document.getElementById('signup-anchor').addEventListener('click', function() {
  document.getElementById('login-form').classList.remove('active');
  document.getElementById('signup-form').classList.add('active');
});

document.getElementById('login-anchor').addEventListener('click', function() {
  document.getElementById('signup-form').classList.remove('active');
  document.getElementById('login-form').classList.add('active');
});
document.getElementById("uploadForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const file = document.getElementById("fileUpload").value;

  if (!name || !file) {
      alert("Please fill out all required fields, including uploading a file.");
      event.preventDefault();  // Prevents form submission
  }
});
