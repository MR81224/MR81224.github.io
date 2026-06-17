// ============================================================
// Muaz Khalifa Al Radi — site scripts
// Vanilla JS, no build step, safe to run on any page.
// ============================================================
(function () {
  "use strict";

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- active nav link, based on body[data-page] ---- */
  var page = document.body.getAttribute("data-page");
  if (page) {
    document.querySelectorAll('.nav-menu a[data-nav="' + page + '"]').forEach(function (a) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    });
  }

  /* ---- footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- reveal-on-scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- publication filters (publications.html) ---- */
  var filterBar = document.querySelector(".pub-filters");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll("button");
    var items = document.querySelectorAll("[data-pubtype]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        items.forEach(function (it) {
          var types = (it.getAttribute("data-pubtype") || "").split(" ");
          it.style.display = f === "all" || types.indexOf(f) !== -1 ? "" : "none";
        });
      });
    });
  }
})();
