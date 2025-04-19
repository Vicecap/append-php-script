document.addEventListener("DOMContentLoaded", function() {
  // Function to update URLs to include .php
  function updateUrls() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
      try {
        const url = new URL(link.href);
        // Check if pathname ends with .php
        if (!url.pathname.endsWith(".php") && !url.pathname.endsWith("/")) {
          url.pathname += ".php";
          link.href = url.toString();
        }
      } catch (e) {
        // Ignore invalid URLs
        console.warn("Invalid URL skipped", link.href);
      }
    });
  }

  // Call the function once on page load
  updateUrls();

  // Handle dynamically loaded content
  const observer = new MutationObserver(updateUrls);
  observer.observe(document.body, { childList: true, subtree: true });
});