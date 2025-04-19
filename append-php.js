document.addEventListener("DOMContentLoaded", function() {
  // Function to update links to include .php
  function updateUrls() {
    const links = document.querySelectorAll("a"); // Select all anchor tags
    links.forEach(link => {
      try {
        const url = new URL(link.href, window.location.origin); // Use window.location.origin as base
        // Append .php to links that don't already end with .php or /
        if (!url.pathname.endsWith(".php") && !url.pathname.endsWith("/")) {
          url.pathname += ".php";
          link.href = url.toString(); // Update the link's href
        }
      } catch (e) {
        console.warn("Skipping invalid URL:", link.href);
      }
    });
  }

  // Call the function once on page load
  updateUrls();

  // Handle dynamically added content
  const observer = new MutationObserver(updateUrls);
  observer.observe(document.body, { childList: true, subtree: true });
});
