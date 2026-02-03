/* -----------------------------
   Robust Image Protection
   Blocks right-click and drag on all images
   Works for dynamic content too
----------------------------- */

(function() {
  // Helper function to check if an element is an image
  function isImage(el) {
    return el.tagName && el.tagName.toLowerCase() === 'img';
  }

  // Block right-click on images
  document.addEventListener('contextmenu', function(e) {
    if (isImage(e.target)) {
      e.preventDefault();
      // Optional: show a small tooltip or alert
      // console.log('Right-click is disabled on images.');
    }
  });

  // Block dragstart on images
  document.addEventListener('dragstart', function(e) {
    if (isImage(e.target)) {
      e.preventDefault();
    }
  });

  // Optional: prevent touch-and-hold on mobile
  document.addEventListener('touchstart', function(e) {
    if (isImage(e.target)) {
      e.preventDefault();
    }
  }, { passive: false });

})();