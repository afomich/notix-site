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
