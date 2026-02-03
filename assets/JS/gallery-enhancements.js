document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------
     Disable right-click & drag on images
  ----------------------------- */
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

});