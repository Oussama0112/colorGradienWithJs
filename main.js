let body = document.body,
  currentGradient = document.querySelector(".currentGradient"),
  myHeadings = document.querySelectorAll("h5"),
  color1 = document.getElementById("color1"),
  color2 = document.getElementById("color2"),
  color3 = document.getElementById("color3"),
  direction = document.getElementById("degree"),
  generate = document.getElementById("mybtn1"),
  refresh = document.getElementById("mybtn2"),
  cssCode = document.querySelector("textarea"),
  copy = document.getElementById("mybtn3");

generate.addEventListener("click", function () {
  body.style.backgroundImage = `linear-gradient(${direction.value},${color1.value},${color2.value},${color3.value})`;
  currentGradient.style.backgroundImage = `linear-gradient(${direction.value},${color1.value},${color2.value},${color3.value})`;
  cssCode.value = `background-image: linear-gradient(${direction.value},${color1.value},${color2.value},${color3.value}`;
});
refresh.addEventListener("click", function () {
  body.style.background = "lightblue";
  currentGradient.style.background = "lightblue";
  color1.value = "#0000ff";
  color2.value = "#00ff00";
  color3.value = "#ff0000";
  cssCode.value = "";
  direction.value = "to right";
});
copy.addEventListener("click", function () {
  if (cssCode.value !== "") {
    cssCode.select();
    cssCode.setSelectionRange(0, 9999);
    document.execCommand("copy");
  }
});
