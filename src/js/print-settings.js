var printOptionsSwitch = document.querySelector(".print-input");
var printSection = document.querySelector(".print-section");
var printOptionsSwitchContainer = document.querySelector(".print-switch");

window.onload = () => {
  printSection.classList.remove("options-shown");
};

printOptionsSwitch.addEventListener("change", function () {
  var printValue = printOptionsSwitch.checked;
  if (printValue == true) {
    printSection.classList.add("options-shown");
    printOptionsSwitchContainer.classList.add("no-bar");
  } else {
    printSection.classList.remove("options-shown");
    printOptionsSwitchContainer.classList.remove("no-bar");
  }
});
