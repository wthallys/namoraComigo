let nop = document.querySelector(".noBtn");

const moveNot = () => {
  var randomX = Math.floor(Math.random() * (window.innerWidth - 150));
  var randomY = Math.floor(Math.random() * (window.innerHeight - 150));
  nop.style.position = "absolute";
  nop.style.top = randomY + "px";
  nop.style.left = randomX + "px"
}

nop.addEventListener("mouseover", moveNot);

let yep = document.querySelector(".yesBtn");

yep.addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/watch?v=orWnzqBA63w" // the office version
  // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Rick Astley (Never Gonna Give You Up ) version
})