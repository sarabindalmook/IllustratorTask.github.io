let ClimbingHands = document.getElementById("Hands")
let BackgroundWall = document.getElementById("Background")

ClimbingHands.addEventListener("click", () => {
  document.getElementById("textbox1").innerText = "You've clicked on the hands!"
})

BackgroundWall.addEventListener("click", () => {
  document.getElementById("textbox2").innerText = "You've clicked on the background!"
})
