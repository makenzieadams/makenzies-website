const caption = document.querySelector(".photo-caption");
const pic = document.querySelector("img");

function showCaption() {
  caption.style.transition = "1s";
  caption.style.opacity = 1;
}

pic.addEventListener(`dblclick`, showCaption);
