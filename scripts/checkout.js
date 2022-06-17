document.querySelector("#nextBtn").addEventListener("click", () => {
    window.location.href = "payment.html";
});

document.querySelector("#previousSum").textContent = `$${JSON.parse(localStorage.getItem("total"))}`;

var finalSum = JSON.parse(localStorage.getItem("total")) + 6.99;
finalSum = Number(finalSum.toFixed(2));

document.querySelector("#totalSum").textContent = `$${finalSum}`;
document.querySelector("#totalSum").style.color = "green";


document.querySelector("#totalSum1").textContent = `$${finalSum}`;
document.querySelector("#totalSum1").style.color = "green";

var finalLength = JSON.parse(localStorage.getItem("length"));
document.querySelector("#mealNum").textContent = finalLength;

var date = localStorage.getItem("dateStored");
console.log(date);
document.querySelector("#dateJs").textContent = date;