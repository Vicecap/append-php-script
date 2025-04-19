document.addEventListener("DOMContentLoaded", function () {
  function updateUrls() {
    const links = document.querySelectorAll("a[href]"); // Select only links with href attributes
    links.forEach(link => {
      try {
        const url = new URL(link.href, window.location.origin); // Use current origin as base
        if (!url.pathname.endsWith(".php") && !url.pathname.endsWith("/")) {
          url.pathname += ".php"; // Append .php to the pathname
          link.href = url.toString(); // Update the link's href
        }
      } catch (e) {
        console.warn("Invalid link skipped:", link.href);
      }
    });
  }

  // Run the function once on page load
  updateUrls();

  // Observe dynamically added links
  const observer = new MutationObserver(updateUrls);
  observer.observe(document.body, { childList: true, subtree: true });
});
