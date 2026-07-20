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
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var summary = item.querySelector("summary");
    var answer = item.querySelector(".faq-a");
    if (!summary || !answer) return;
    summary.addEventListener("click", function (e) {
      if (!item.open) return; // opening: let the default toggle run, CSS animates 0fr→1fr
      e.preventDefault();
      answer.style.gridTemplateRows = "0fr";
      var caret = item.querySelector(".faq-c");
      if (caret) caret.style.transform = "rotate(0deg)";
      answer.addEventListener(
        "transitionend",
        function () {
          item.open = false;
          answer.style.gridTemplateRows = "";
          if (caret) caret.style.transform = "";
        },
        { once: true }
      );
    });
  });
})();
