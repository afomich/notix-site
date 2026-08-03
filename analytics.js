// Notix site — analytics and consent.
//
// The provider block below is the only vendor-specific part of the file. Every
// page loads this one script, so swapping vendors is a change here and nowhere
// else — the pages themselves stay provider-agnostic.
//
// Nothing loads and no cookie is set until the visitor accepts. That order is
// the point: GA4 writes cookies, so under ePrivacy it cannot run first and ask
// afterwards. Until MEASUREMENT_ID is filled in, the script does nothing at all
// — not even the banner — so the site stays shippable before the property
// exists.
(function () {
  var MEASUREMENT_ID = "G-KEQZHBGJKN"; // GA4 property for notix-ai.app

  var CONSENT_KEY = "notix.analytics.consent"; // "granted" | "denied"
  // Absolute, because the banner appears on pages at two different depths (/ and
  // /support/) plus /404.html, which the server may render at any URL at all.
  // The site is served from the domain root, so this resolves everywhere.
  var PRIVACY_URL = "/privacy/";

  if (!MEASUREMENT_ID || MEASUREMENT_ID.indexOf("XXXX") !== -1) return;

  // Safari in private mode throws on storage access, and a visitor who blocks
  // storage must still get a working site — they are simply asked every visit.
  function readConsent() {
    try {
      return window.localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }
  function writeConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* storage unavailable: the choice applies to this page view only */
    }
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  var started = false;

  function startAnalytics() {
    if (started) return;
    started = true;

    var loader = document.createElement("script");
    loader.async = true;
    loader.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(loader);

    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID);
  }

  // Outbound conversion tracking.
  //
  // Every App Store link carries data-track and data-placement. Placement is the
  // point: "someone left for the App Store" is not actionable, "the footer CTA
  // does the work and the nav pill does nothing" is. Adding a new CTA anywhere on
  // the site needs no change to this file — only the two attributes on the link.
  //
  // gtag sends through navigator.sendBeacon, which survives the navigation that
  // follows the click, so no artificial delay is needed before leaving the page.
  document.addEventListener("click", function (event) {
    var node = event.target;
    if (!node || typeof node.closest !== "function") return;

    var el = node.closest("[data-track]");
    if (!el || !started) return;

    gtag("event", el.getAttribute("data-track"), {
      placement: el.getAttribute("data-placement") || "unknown",
      link_url: el.getAttribute("href") || ""
    });
  });

  // The banner is built here rather than written into every page, so the four
  // HTML files stay free of consent markup and a vendor swap touches one file.
  function showBanner() {
    var bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Analytics cookies");
    // Static template, no interpolation: the one variable part is the policy
    // href, set through setAttribute below rather than spliced into markup.
    bar.innerHTML =
      '<p class="consent-text">We use analytics cookies to see how visitors find this page. ' +
      "No ads, and nothing is linked to your Notix account. " +
      '<a class="consent-link">Privacy Policy</a></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="consent-btn consent-no">Decline</button>' +
      '<button type="button" class="consent-btn consent-yes">Accept</button>' +
      "</div>";
    bar.querySelector(".consent-link").setAttribute("href", PRIVACY_URL);

    function close(choice) {
      writeConsent(choice);
      if (choice === "granted") startAnalytics();
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    }

    bar.querySelector(".consent-yes").addEventListener("click", function () {
      close("granted");
    });
    bar.querySelector(".consent-no").addEventListener("click", function () {
      close("denied");
    });

    document.body.appendChild(bar);
  }

  var consent = readConsent();
  if (consent === "granted") {
    startAnalytics();
  } else if (consent !== "denied") {
    showBanner();
  }
})();
