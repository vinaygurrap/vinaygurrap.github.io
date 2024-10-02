// Get the view count element
const viewCountElement = document.getElementById('view-count');

// Initialize the view count
let viewCount = 0;

// Update the view count when the page loads
window.onload = function() {
  // Retrieve the stored view count from local storage (if available)
  const storedViewCount = localStorage.getItem('viewCount');
  if (storedViewCount) {
    viewCount = parseInt(storedViewCount);
  }

  // Update the view count element
  viewCountElement.textContent = viewCount;

  // Increment the view count and store it in local storage
  viewCount++;
  localStorage.setItem('viewCount', viewCount);
};