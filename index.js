let max_width = window.matchMedia("(max-width: 800px)");

let side_bar = document.getElementsByClassName("side-bar")[0];
let navigation = document.getElementsByClassName("navigation")[0];
let nav_button = document.getElementsByClassName("side-bar__button")[0];

function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}
  
// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
});
  
// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);

function makeActive(anchor_tag) {
    active_navigation_links = document.getElementsByClassName("active");
    if (active_navigation_links.length) {
        active_navigation_links[0].classList.remove("active");
    }
    anchor_tag.classList.add("active");
}

// Sidebar slide
window.addEventListener("resize", () => {
  let check_box = document.getElementsByClassName("side-bar__checkbox")[0];
  if (window.innerWidth < 800) {
    check_box.addEventListener("click", () => {
      console.log("clicked");
      if (check_box.checked) {
        side_bar.style.width = "100%";
        navigation.style.transform = "translateX(0)";
        navigation.style.opacity = "1";
        nav_button.style.transform = "translateX(0)";
      }
      else {
        side_bar.style.width = "8rem";
        navigation.style.opacity = "0";
        navigation.style.transform = "translateX(-10rem)";
        nav_button.style.transform = "translateX(-1.5rem)";
      }
    });
  }
  else {
    side_bar.style.width = "20rem";
    navigation.style.transform = "translateX(0)";
    navigation.style.opacity = "1";
    nav_button.style.transform = "translateX(0)";
  }
});

// function sidebarSlide(check_box) {
//   if (check_box.checked) {
//     side_bar.style.width = "100%";
//     navigation.style.transform = "translateX(0)";
//     navigation.style.opacity = "1";
//     nav_button.style.transform = "translateX(0)";
//   }
//   else {
//     side_bar.style.width = "8rem";
//     navigation.style.opacity = "0";
//     navigation.style.transform = "translateX(-10rem)";
//     nav_button.style.transform = "translateX(-1.5rem)";
//   }
// }

// Display mode toggle
function displayToggle(check_box) {  
  if(check_box.checked) {
    setRootStylestoDark();
  }
  else {
    setRootStylesToLight();
  }
}

function setRootStylestoDark() {
  let root = document.querySelector(":root");
  root.style.setProperty("--bg-color-primary", "#2c3e50");
  root.style.setProperty("--bg-color-secondary", "#a6bad421");
  root.style.setProperty("--font-color-primary-1", "#869cb1");
  root.style.setProperty("--font-color-primary-2", "#aab4be");
  root.style.setProperty("--font-color-secondary", "rgb(153, 202, 214)");
  root.style.setProperty("--box-shadow-color", "#1b2838");
  root.style.setProperty("--side-bar-hover-color", "wheat");
  document.getElementsByClassName("bg-video")[0].style.opacity = "0.1";
  document.getElementsByClassName("heading-2")[0].style.color = "wheat";
  document.getElementsByClassName("fa-sun")[0].style.color = "rgba(255, 213, 97, 1)";
  document.getElementsByClassName("fa-moon")[0].style.color = "grey";
  document.getElementsByClassName("fa-github")[0].style.color = "white";
  document.getElementsByClassName("fa-linkedin")[0].style.color = "#1fb3f8";
  document.getElementById("email-id").style.color = "wheat"
}

function setRootStylesToLight() {
  let root = document.querySelector(":root");
  root.style.setProperty("--bg-color-primary", "#FFF");
  root.style.setProperty("--bg-color-secondary", "#9b9b9b");
  root.style.setProperty("--font-color-primary-2", "#7e8286");
  root.style.setProperty("--font-color-primary-1", "#476179");
  root.style.setProperty("--font-color-secondary", "#2e4460");
  root.style.setProperty("--box-shadow-color", "#b9b7b4");
  root.style.setProperty("--side-bar-hover-color", "#e39721");
  document.getElementsByClassName("bg-video")[0].style.opacity = "0.08";
  document.getElementsByClassName("heading-2")[0].style.color = "#686765";
  document.getElementsByClassName("fa-sun")[0].style.color = "orange";
  document.getElementsByClassName("fa-moon")[0].style.color = "#2e4460";
  document.getElementsByClassName("fa-github")[0].style.color = "black";
  document.getElementsByClassName("fa-linkedin")[0].style.color = "#0e76a8";
  document.getElementById("email-id").style.color = "black";
}