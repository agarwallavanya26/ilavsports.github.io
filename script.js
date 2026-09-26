/* =========================================
   ILAV SPORTS
   PROJECT CAROUSEL
========================================= */

const cards = document.querySelectorAll(".project-card");

const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".prev");

const nextButton = document.querySelector(".next");


let currentProject = 0;

let autoPlayTimer;


/* =========================================
   SHOW PROJECT
========================================= */

function showProject(index) {

  /*
    This makes sure the carousel
    loops back around.
  */

  currentProject =
    (index + cards.length) % cards.length;


  /*
    Show only the current project
  */

  cards.forEach((card, i) => {

    card.classList.toggle(
      "active",
      i === currentProject
    );

  });


  /*
    Update the little dots
  */

  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === currentProject
    );

  });

}


/* =========================================
   PREVIOUS BUTTON
========================================= */

prevButton.addEventListener(
  "click",
  () => {

    showProject(
      currentProject - 1
    );

    restartAutoPlay();

  }
);


/* =========================================
   NEXT BUTTON
========================================= */

nextButton.addEventListener(
  "click",
  () => {

    showProject(
      currentProject + 1
    );

    restartAutoPlay();

  }
);


/* =========================================
   DOT BUTTONS
========================================= */

dots.forEach((dot, index) => {

  dot.addEventListener(
    "click",
    () => {

      showProject(index);

      restartAutoPlay();

    }
  );

});


/* =========================================
   AUTOMATIC CAROUSEL
========================================= */

function startAutoPlay() {

  autoPlayTimer =
    setInterval(() => {

      showProject(
        currentProject + 1
      );

    }, 6000);

}


/* =========================================
   RESTART TIMER
========================================= */

function restartAutoPlay() {

  clearInterval(autoPlayTimer);

  startAutoPlay();

}


/* =========================================
   START WEBSITE
========================================= */

showProject(0);

startAutoPlay();
