(function () {

  /* -----------------------------
     DESKTOP — block right click
  ----------------------------- */
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('img')) {
      e.preventDefault();
    }
  }, true); // ← capture phase (important)


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


})();