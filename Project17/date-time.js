
function updateTime() {
  const currentDate = new Date();
  
  const dateString = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  const timeString = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
  });

  // Update the date and time on the page
  document.getElementById("current-date").textContent = "Current Date: " + dateString;
  document.getElementById("current-time").textContent = "Current Time: " + timeString;
}

// Update time when the page loads
window.onload = updateTime;

// Go back to the previous page
function goBack() {
  window.history.back("file:///F:/Projects/main/index.html");
}
