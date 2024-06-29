const butonBmi = document.getElementById("buton-bmi");
const containerBmi = document.getElementById("container-bmi");
const containerWater = document.getElementById("container-water");
const butonWater = document.getElementById("buton-water");
const eroareBmi = document.getElementById("eroare-bmi");

function afisareBmi() {
  const valoareBmi = document.getElementById("bmi-value");
  let height = inputHeight.value;
  const weight = inputWeight.value;
  if (!weight || !height) {
    eroareBmi.style.display = "block";
  } else {
    height = height / 100;
    const bmi = weight / (height * height);
    valoareBmi.innerHTML = bmi.toFixed(2);
    eroareBmi.style.display = "none";
    console.log(containerBmi.style.display);
    if (containerBmi.style.display === "none") {
      containerBmi.style.display = "block";
    } else {
      containerBmi.style.display = "none";
    }
  }
}

function afisareWater() {
  const valoareWater = document.getElementById("water-value");
  const weight = inputWeight.value;
  const water = weight * 0.03;
  valoareWater.innerHTML = water.toFixed(1);

  if (containerWater.style.display === "none") {
    containerWater.style.display = "block";
  } else {
    containerWater.style.display = "none";
  }
}

butonBmi.addEventListener("click", afisareBmi);
butonWater.addEventListener("click", afisareWater);
const inputAge = document.getElementById("inputAge");
const inputHeight = document.getElementById("inputHeight");
const inputWeight = document.getElementById("inputWeight");
