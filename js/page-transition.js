(function () {
  const directionKey = "portfolio-transition-direction";
  const direction = sessionStorage.getItem(directionKey);

  if (direction === "left" || direction === "right") {
    document.documentElement.dataset.transitionDirection = direction;
    sessionStorage.removeItem(directionKey);
  }

  document.addEventListener(
    "click",
    (event) => {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      const isInternalPage =
        destination.origin === window.location.origin &&
        destination.pathname.endsWith(".html") &&
        destination.pathname !== window.location.pathname;

      if (!isInternalPage) return;

      sessionStorage.setItem(directionKey, event.clientX >= window.innerWidth / 2 ? "right" : "left");
    },
    true
  );
})();
