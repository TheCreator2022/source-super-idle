var money = document.querySelector("#money")
var cell = document.querySelector(".cell")
var auto = document.querySelector(".automation")

var moneyAttach = 0
var attpc = 0.25
var mps = 0
var upg1 = document.querySelector("input.upg1")
var cost1 = 8
var upg2 = document.querySelector("input.upg2")
var cost2 = 1720
var upg3 = document.querySelector("input.upg3")
var cost3 = 7200
var upg4 = document.querySelector("input.upg4")
var cost4 = 20000
var upg5 = document.querySelector("input.upg5")
var cost5 = 240000
var rank = 'Good'
var theTitle = document.querySelector("h1#title")
var fontTitle = 'monospace'
const icon = 'main.png'
var getIcon = document.querySelector("link.get-icon")


cell.onblur = () => {
  moneyAttach += attpc
}

const getAdd1 = (value) => {
  mps += value
}

const getAdd2 = (value) => {
  attpc += value
}

upg1.onclick = () => {
  if (moneyAttach >= cost1) {
     getAdd1(1)
     moneyAttach -= cost1
     cost1 *= 1.4
  }
}

upg2.onclick = () => {
  if (moneyAttach >= cost2) {
    getAdd2(49)
    moneyAttach -= cost2
    cost2 *= 1.4
    if (attpc > 50) {
      rank = 'Tear'
    }
  }
}

upg3.onclick = () => {
  if (moneyAttach >= cost3) {
    getAdd1(112)
    moneyAttach -= cost3
    cost3 *= 1.4
    if (mps > 1011) {
      rank = 'Half a Current Year'
    }
  }
}

upg4.onclick = () => {
  if (moneyAttach >= cost4) {
    getAdd1(420)
    moneyAttach -= cost4
    cost4 *= 1.4
  }
}

upg5.onclick = () => {
  if (moneyAttach >= cost5) {
    getAdd1(4225)
    moneyAttach -= cost5
    cost5 *= 1.4
  }
}

const attachDisplay = () => {
  if (mps > 1.5 * (10 ** 7)) {
    auto.style.display = "block"
  } else {
    auto.style.display = "none"
  }
}

const moneyTick = function() {
  moneyAttach += mps
  attachDisplay()
}

const update = function() {
  moneyTick()
  money.innerText = moneyAttach + " (" + rank + ")"
}

setInterval(update, 100)