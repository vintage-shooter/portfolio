document.addEventListener('DOMContentLoaded', function () {

  function protectImage(img) {
    img.draggable = false;

    img.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

    img.addEventListener('dragstart', function (e) {
      e.preventDefault();
    });

    // mobile long-press prevention
    img.addEventListener('touchstart', function () {}, { passive: true });
  }

  // apply to all current images
  document.querySelectorAll('img').forEach(protectImage);

  // also protect images added later (Mobirise sometimes injects content)
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.tagName === 'IMG') protectImage(node);
        if (node.querySelectorAll) {
          node.querySelectorAll('img').forEach(protectImage);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

img {
  -webkit-user-drag: none;
  user-select: none;
  -webkit-touch-callout: none;
}

});