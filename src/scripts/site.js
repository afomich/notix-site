// Notix site — scroll reveal + FAQ accordion animation.
// Progressive enhancement: without JS, content is fully visible and
// <details> FAQ toggles natively (CSS handles [open] state).
(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveal for sections below the hero.
  if (!reduceMotion && "IntersectionObserver" in window) {
    var els = document.querySelectorAll("[data-reveal]");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "none";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)";
      io.observe(el);
    });
  }

  // FAQ: animate <details> close (open state animates via CSS [open] rule;
  // closing needs JS because removing [open] hides content instantly).
  //
  // The close is finished by whichever comes first: the transition ending, or a
  // timer. The timer is not belt-and-braces — transitionend genuinely may never
  // arrive. Click a summary a second time while it is already collapsing and the
  // inline value is set to 0fr when it is already 0fr, so no transition starts
  // and no event fires. Without a fallback the item stays `open` with collapsed
  // content: the page keeps the extra height, the footer sits that much too low,
  // and the item can never be reopened because every later click takes the
  // "already open" branch.
  var CLOSE_MS = 450; // .faq-a transition is 0.4s in styles.css, plus a margin

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var summary = item.querySelector("summary");
    var answer = item.querySelector(".faq-a");
    if (!summary || !answer) return;

    var closing = false;

    summary.addEventListener("click", function (e) {
      if (!item.open) return; // opening: let the default toggle run, CSS animates 0fr→1fr
      e.preventDefault();
      if (closing) return; // already collapsing; ignore the impatient second click
      closing = true;

      var caret = item.querySelector(".faq-c");
      answer.style.gridTemplateRows = "0fr";
      if (caret) caret.style.transform = "rotate(0deg)";

      var finished = false;
      var timer = null;

      function finish() {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        answer.removeEventListener("transitionend", onTransitionEnd);
        item.open = false;
        answer.style.gridTemplateRows = "";
        if (caret) caret.style.transform = "";
        closing = false;
      }

      function onTransitionEnd(ev) {
        // Ignore transitions bubbling up from the answer's own contents.
        if (ev.target === answer && ev.propertyName === "grid-template-rows") finish();
      }

      answer.addEventListener("transitionend", onTransitionEnd);
      timer = setTimeout(finish, CLOSE_MS);
    });
  });
})();

// Header burger and the mobile nav panel.
//
// Lives here rather than in the examples block because every page has the header,
// and only the example pages load the tab code below.
(function () {
  // The panel and the scrim start where the header ends. Measuring beats a
  // constant: the header is 77px on desktop and 71px on a phone, and a hard
  // number left a 6px gap with the background showing through.
  var header = document.querySelector(".site-header");
  function syncHeaderHeight() {
    if (!header) return;
    var h = Math.round(header.getBoundingClientRect().height);
    if (h) document.documentElement.style.setProperty("--header-h", h + "px");
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);

  var burger = document.querySelector("[data-burger]");
  var panel = document.querySelector("[data-panel-nav]");
  var scrim = document.querySelector("[data-scrim]");
  if (!burger || !panel) return;

  // The scroll position has to be carried by hand: pinning the body collapses it
  // to the top, so it is stored on open and restored on close.
  var lockedAt = 0;

  function setOpen(open) {
    var wasOpen = burger.getAttribute("aria-expanded") === "true";
    if (open === wasOpen) return;

    burger.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) panel.setAttribute("data-open", "");
    else panel.removeAttribute("data-open");
    if (scrim) scrim.hidden = !open;

    if (open) {
      lockedAt = window.scrollY || window.pageYOffset || 0;
      document.body.style.top = -lockedAt + "px";
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
      document.body.style.top = "";
      window.scrollTo(0, lockedAt);
    }
  }

  burger.addEventListener("click", function () {
    setOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  // Following a link closes the panel. Same-page anchors do not reload, so
  // without this the menu would stay over the section it just scrolled to.
  panel.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  if (scrim) scrim.addEventListener("click", function () { setOpen(false); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // Resizing past the breakpoint brings the desktop nav back; leaving the panel
  // flagged open would mean two menus at once the next time it narrows.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 640) setOpen(false);
  });
})();

// Examples: tab switcher + flashcard flip.
//
// The three panels are rendered server-side and stay in the DOM whatever happens
// here. This file only hides two of them. That ordering is the point: a crawler,
// a printer and a browser with JS disabled all see the full page, while a normal
// visitor gets a page that fits on one screen instead of eighteen.
(function () {
  var bar = document.querySelector("[data-tabbar]");
  if (!bar) return;

  var tabs = [].slice.call(bar.querySelectorAll("[data-tab]"));
  var panels = {};
  tabs.forEach(function (t) {
    var el = document.getElementById(t.getAttribute("data-tab"));
    if (el) panels[t.getAttribute("data-tab")] = el;
  });
  var names = Object.keys(panels);
  if (names.length < 2) return;

  function show(name, push) {
    if (!panels[name]) name = names[0];
    names.forEach(function (n) {
      panels[n].hidden = n !== name;
    });
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === name;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.classList.toggle("is-active", on);
    });
    // pushState rather than assigning location.hash: the latter scrolls the
    // matching element into view, which yanks the page down every time someone
    // switches tab.
    if (push && window.history && window.history.pushState) {
      window.history.pushState(null, "", "#" + name);
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      show(t.getAttribute("data-tab"), true);
    });
  });

  window.addEventListener("hashchange", function () {
    show(window.location.hash.replace("#", ""), false);
  });

  show(window.location.hash.replace("#", ""), false);

  // Flip, not expand — the same interaction as the flashcards in the app. The
  // rotation lives on an inner wrapper so both faces can sit in the same box.
  [].slice.call(document.querySelectorAll(".ex-card")).forEach(function (card) {
    function flip() {
      card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", card.classList.contains("is-flipped") ? "true" : "false");
    }
    card.setAttribute("aria-pressed", "false");
    card.addEventListener("click", flip);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        flip();
      }
    });
  });
})();
