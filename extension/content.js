(() => {
  // Block direct access to short-form platforms
  (function autoCloseShortPages() {
    const shortPagePatterns = [
      /youtube\.com\/shorts/,
      /instagram\.com\/reels/,
      /tiktok\.com/,
      /facebook\.com\/reel/,
    ];

    if (shortPagePatterns.some(pattern => pattern.test(window.location.href))) {
      setTimeout(() => {
        window.location.href = "about:blank";
      }, 500);
    }
  })();

  const selectors = [
    'a[href*="youtube.com/shorts"]',
    'ytd-reel-shelf-renderer',
    'ytd-rich-section-renderer:has(a[href*="/shorts/"])',
    'a[href*="/reels/"]',
    'div:has(video[src*="reel"])',
    'a[href*="tiktok.com"]',
    'div[data-e2e*="recommend-list-item"]'
  ];

  function hideKnownShortContent() {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.display = "none";
        el.setAttribute("data-hidden-by", "Shorts Blocker");
      });
    });
  }

  function blockShortVideos() {
    document.querySelectorAll("video").forEach(video => {
      if (video.dataset.blockedByShortsBlocker) return;
      video.dataset.blockedByShortsBlocker = "true";

      function blockIfShort() {
        if (video.duration && video.duration < 120) {
          video.pause();
          video.muted = true;
          video.removeAttribute("autoplay");

          video.play = function () {
            return Promise.reject("Blocked by Shorts Blocker");
          };

          ["play", "playing", "canplay"].forEach(event =>
            video.addEventListener(event, () => video.pause())
          );

          video.style.filter = "blur(100px) grayscale(1)";
          video.style.pointerEvents = "none";
          video.style.zIndex = "9999";

          const overlay = document.createElement("div");
          overlay.innerText = "Short video blocked";
          Object.assign(overlay.style, {
            position: "absolute",
            top: video.offsetTop + "px",
            left: video.offsetLeft + "px",
            width: video.offsetWidth + "px",
            height: video.offsetHeight + "px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "#fff",
            fontSize: "18px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10000",
            pointerEvents: "none"
          });

          setTimeout(() => {
            video.parentElement?.appendChild(overlay);
          }, 200);
        }
      }

      video.addEventListener("loadedmetadata", blockIfShort);
      if (video.readyState >= 1 && video.duration < 60) {
        blockIfShort();
      }
    });
  }

  function removeShortsSidebarEntry() {
    const navItems = document.querySelectorAll("ytd-guide-entry-renderer");
    navItems.forEach(item => {
      const text = item.textContent?.trim()?.toLowerCase();
      if (text.includes("shorts")) {
        item.remove();
      }
    });

    const labelledItems = document.querySelectorAll('[title], [aria-label]');
    labelledItems.forEach(el => {
      const label = (el.getAttribute('title') || el.getAttribute('aria-label') || '').toLowerCase();
      if (label.includes("shorts")) {
        const parent = el.closest("ytd-guide-entry-renderer, tp-yt-paper-item, a");
        if (parent) parent.remove();
      }
    });
  }

  // Initial run
  hideKnownShortContent();
  blockShortVideos();
  removeShortsSidebarEntry();

  // Mutation observer
  const observer = new MutationObserver(() => {
    hideKnownShortContent();
    blockShortVideos();
    removeShortsSidebarEntry();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Protect observer from being overwritten
  Object.freeze(observer);

  // Optional: Obfuscate the function source
  const nativeToString = Function.prototype.toString;
  const protectedFuncs = new WeakSet([hideKnownShortContent, blockShortVideos, removeShortsSidebarEntry]);

  Function.prototype.toString = new Proxy(nativeToString, {
    apply(target, thisArg, args) {
      if (protectedFuncs.has(thisArg)) {
        return "function () { [native code] }";
      }
      return Reflect.apply(target, thisArg, args);
    }
  });

})();
