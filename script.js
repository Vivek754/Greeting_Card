var btn = document.getElementById("btn");
var upperCurtan = document.getElementById("upperCurtan");
var lowerCurtan = document.getElementById("lowerCurtan");

btn.addEventListener("click", () => {
    upperCurtan.style.height = "0px";
    lowerCurtan.style.height = "0px";
    btn.style.display = "none"
    console.log("the button is clicked");
})