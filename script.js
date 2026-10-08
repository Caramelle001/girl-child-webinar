/* ==========================================================
   AIFSA YOUNG WOMEN (PROJECT) CONFERENCE 2026
   WEBINAR REGISTRATION PAGE
   ========================================================== */


/* ==========================================================
   1. SMOOTH SCROLLING
   ========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ==========================================================
   2. FLYER IMAGE INTERACTION
   ========================================================== */

const flyer = document.querySelector(".hero-art > img");

if (flyer) {

  flyer.addEventListener("click", function () {

    /*
      On mobile, tapping the flyer gives
      a subtle visual response.
    */

    this.style.transform = "rotate(0deg) scale(1.015)";

    setTimeout(() => {

      this.style.transform = "rotate(1deg)";

    }, 220);

  });

}


/* ==========================================================
   3. SPEAKER PILL INTERACTION
   ========================================================== */

const speakerItems = document.querySelectorAll(
  ".speaker-strip span"
);

speakerItems.forEach(item => {

  item.addEventListener("mouseenter", () => {

    item.style.transition = "0.2s ease";

  });

});


/* ==========================================================
   4. GOOGLE FORM REGISTRATION BUTTON
   ========================================================== */

/*
   IMPORTANT:

   Put your REAL Google Form link below.

   Example:

   const GOOGLE_FORM_URL =
   "https://docs.google.com/forms/d/e/XXXXXXXX/viewform";

   This is the same Google Form already connected
   to your existing Google Sheet.

   Do NOT create another form.
*/

const GOOGLE_FORM_URL =
  "YOUR_GOOGLE_FORM_LINK_HERE";


/*
   Find every registration button.
*/

const registrationButtons = document.querySelectorAll(
  ".submit-btn, .primary-btn, .secondary-btn, .nav-btn"
);


/*
   Only buttons that are meant to open the
   Google Form should receive the form URL.

   The hero/nav buttons still scroll to
   the registration section.
*/

const submitButton =
  document.querySelector(".submit-btn");


if (submitButton) {

  submitButton.href = GOOGLE_FORM_URL;

  submitButton.target = "_blank";

  submitButton.rel =
    "noopener noreferrer";

}


/* ==========================================================
   5. CHANGE FORM BUTTON IF URL HAS NOT BEEN ADDED
   ========================================================== */

if (
  submitButton &&
  GOOGLE_FORM_URL === "YOUR_GOOGLE_FORM_LINK_HERE"
) {

  submitButton.addEventListener("click", function(event) {

    event.preventDefault();

    alert(
      "The registration form link has not been connected yet."
    );

  });

}


/* ==========================================================
   6. YEAR
   ========================================================== */

const currentYear =
  new Date().getFullYear();

const footerYear =
  document.querySelector("footer");

if (footerYear) {

  footerYear.innerHTML =
    footerYear.innerHTML.replace(
      "2026",
      currentYear
    );

}


/* ==========================================================
   7. SIMPLE SCROLL REVEAL
   ========================================================== */

const revealElements = document.querySelectorAll(
  ".statement-grid, " +
  ".section-heading, " +
  ".speaker-strip, " +
  ".register-grid, " +
  ".closing-card"
);


/*
   Initial state
*/

revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(25px)";

  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

});


/*
   Intersection Observer
*/

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.style.opacity = "1";

        entry.target.style.transform =
          "translateY(0)";

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ==========================================================
   8. CONSOLE MESSAGE
   ========================================================== */

console.log(
  "AIFSA Young Women (Project) Conference 2026 website loaded successfully."
);