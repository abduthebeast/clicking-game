let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;

let clickUpgradeCost = 10;
let autoClickerCost = 50;

const cookiesDisplay = document.getElementById("cookies");
const clickBtn = document.getElementById("clickBtn");
const upgradeClickBtn = document.getElementById("upgradeClick");
const buyAutoBtn = document.getElementById("buyAuto");
const clickCostDisplay = document.getElementById("clickCost");
const autoCostDisplay = document.getElementById("autoCost");

const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

// Clicking
clickBtn.addEventListener("click", () => {
  cookies += cookiesPerClick;
  updateDisplay();
});

// Upgrade click power
upgradeClickBtn.addEventListener("click", () => {
  if (cookies >= clickUpgradeCost) {
    cookies -= clickUpgradeCost;
    cookiesPerClick += 1;
    clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
    updateDisplay();
  }
});

// Buy auto clicker
buyAutoBtn.addEventListener("click", () => {
  if (cookies >= autoClickerCost) {
    cookies -= autoClickerCost;
    cookiesPerSecond += 1;
    autoClickerCost = Math.floor(autoClickerCost * 1.7);
    updateDisplay();
  }
});

// Auto clicker interval
setInterval(() => {
  cookies += cookiesPerSecond;
  updateDisplay();
}, 1000);

// Save game
saveBtn.addEventListener("click", () => {
  const saveData = {
    cookies,
    cookiesPerClick,
    cookiesPerSecond,
    clickUpgradeCost,
    autoClickerCost
  };
  localStorage.setItem("clickerSave", JSON.stringify(saveData));
  alert("Game Saved!");
});

// Load game
loadBtn.addEventListener("click", () => {
  const saved = localStorage.getItem("clickerSave");
  if (saved) {
    const data = JSON.parse(saved);
    cookies = data.cookies;
    cookiesPerClick = data.cookiesPerClick;
    cookiesPerSecond = data.cookiesPerSecond;
    clickUpgradeCost = data.clickUpgradeCost;
    autoClickerCost = data.autoClickerCost;
    updateDisplay();
    alert("Game Loaded!");
  } else {
    alert("No save found.");
  }
});

// Update UI
function updateDisplay() {
  cookiesDisplay.textContent = cookies;
  clickCostDisplay.textContent = clickUpgradeCost;
  autoCostDisplay.textContent = autoClickerCost;
}
