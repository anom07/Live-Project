let burger = document.querySelector(".burger");
let lines = document.querySelectorAll(".lines");
let burgerChecked = false;
let dropdown_header = document.querySelector(".dropdown_header");
burger.addEventListener("click", () => {
  console.log("clicked");
  if (burgerChecked) {
    lines[0].style.transform = "";
    lines[1].style.transform = "";
    lines[2].style.transform = "";
    dropdown_header.style.height = "0px";
    burgerChecked = false;
  } else {
    dropdown_header.style.height = "200px";
    lines[0].style.transform = "rotate(45deg)";
    lines[1].style.transform = "scaleY(0)";
    lines[2].style.transform = "rotate(-45deg)";
    burgerChecked = true;
  }
});

let more_link = document.getElementById("more_link");

if (more_link) {
  more_link.addEventListener("click", () => {
    // console.log("Clicked");
    let more_container = document.querySelector(".more_container");

    if (more_container) {
      let current_opacity = more_container.style.opacity;

      if (current_opacity === "0" || current_opacity === "") {
        // console.log("inside flex");
        more_container.style.display = "flex";
        more_container.style.opacity = "1";
      } else {
        // console.log("inside none");
        more_container.style.display = "none";
        more_container.style.opacity = "0";
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".link");
  let moreContainer = document.querySelector(".more_container");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // Remove active class from all links
      links.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      // Add active class to the clicked link
      link.classList.add("active");

      // Hide more_container if the clicked link is not the "more_link"
      if (link !== document.getElementById("more_link")) {
        moreContainer.style.display = "none";
        moreContainer.style.opacity = "0";
      }
    });
  });
});
