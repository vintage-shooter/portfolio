(function () {

  /* -----------------------------
     DESKTOP — block right click
  ----------------------------- */
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('img')) {
      e.preventDefault();
    }
  }, true);


  /* -----------------------------
     DESKTOP — block drag
  ----------------------------- */
  document.addEventListener('dragstart', function (e) {
    if (e.target.closest('img')) {
      e.preventDefault();
    }
  }, true);


  /* -----------------------------
     MOBILE — block long press save
  ----------------------------- */
  document.addEventListener('touchstart', function (e) {
    if (e.target.closest('img')) {
      e.target.style.webkitTouchCallout = 'none';
    }
  }, { passive: true, capture: true });


  /* -----------------------------
     KEYBOARD — block shortcuts
     Windows (Ctrl) + Mac (⌘)
  ----------------------------- */
  document.addEventListener('keydown', function (e) {

    const key = e.key.toLowerCase();
    const cmd = e.ctrlKey || e.metaKey; // Ctrl (Win/Linux) OR Command (Mac)

    // Save page
    if (cmd && key === 's') {
      e.preventDefault();
    }

    // View source
    if (cmd && key === 'u') {
      e.preventDefault();
    }

    // DevTools
    if (cmd && e.shiftKey && key === 'i') {
      e.preventDefault();
    }

    // F12
    if (e.key === 'F12') {
      e.preventDefault();
    }

  });

  /* -----------------------------
     VIDEO RESIZING — auto portrait / landscape
  ----------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    const iframes = document.querySelectorAll('iframe.mbr-embedded-video');
    iframes.forEach(iframe => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('video-wrapper');

      // Insert wrapper before iframe and move iframe inside
      iframe.parentNode.insertBefore(wrapper, iframe);
      wrapper.appendChild(iframe);

      // Detect aspect ratio
      const width = parseInt(iframe.getAttribute('width')) || 16;
      const height = parseInt(iframe.getAttribute('height')) || 9;

      if (height > width) {
        wrapper.classList.add('portrait');
      } else {
        wrapper.classList.add('landscape');
      }
    });
  });

})();