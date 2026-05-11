function showResult() {
  let otherWeight;
  let minorWeight;
  let majorWeight;
  let other = document.querySelector("#other").value;
  let minor = document.querySelector("#minor").value;
  let major = document.querySelector("#major").value;

  //converts to number arrays
  let otherGradeArray = other.split(",").map(Number);
  let minorGradeArray = minor.split(",").map(Number);
  let majorGradeArray = major.split(",").map(Number);

  let otherAvg = findAverage(otherGradeArray);
  let minorAvg = findAverage(minorGradeArray);
  let majorAvg = findAverage(majorGradeArray);

  let type = document.querySelector("#classType").value;

  if (type === "kap") {
    otherWeight = 0.10;
    minorWeight = 0.30;
    majorWeight = 0.60;
  } else if (type === "ap") {
    otherWeight = 0.10;
    minorWeight = 0.20;
    majorWeight = 0.70;
  } else if (type === "aca") {
    otherWeight = 0.15;
    minorWeight = 0.35;
    majorWeight = 0.50;
  }

  if (type === "final") {
  let six1 = Number(document.querySelector("#six1").value);
  let six2 = Number(document.querySelector("#six2").value);
  let six3 = Number(document.querySelector("#six3").value);
  let exam = Number(document.querySelector("#exam").value);

  let sixWeeksAvg = (six1 + six2 + six3) / 3;

  let finalGrade =
    (sixWeeksAvg * 0.85) +
    (exam * 0.15);

  document.querySelector("#popupResult").innerText =
    finalGrade.toFixed(2) + "%";

  document.querySelector("#popup").classList.add("show");
  return;
}

  let finalGrade = (otherAvg * otherWeight) + (minorAvg * minorWeight) + (majorAvg * majorWeight);

  document.querySelector("#popupResult").innerText = finalGrade.toFixed(2) + "%";
  document.querySelector("#popup").classList.add("show");

  document.querySelector(".result").classList.add("show");
}

function findAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (arr.length == 0) {
    return 0;
  } else {
    return total / arr.length;
  }
}

function toggleInputs() {
  let type = document.querySelector("#classType").value;

  let regularInputs = document.querySelector("#regularInputs");
  let finalInputs = document.querySelector("#finalInputs");

  if (type === "final") {
    regularInputs.style.display = "none";
    finalInputs.style.display = "block";
  } else {
    regularInputs.style.display = "block";
    finalInputs.style.display = "none";
  }
}

function closePopup() {
  document.querySelector("#popup").classList.remove("show");
}