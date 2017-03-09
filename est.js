var caseNumberInput = document.querySelector("#caseNum");
var timeForCaseInput = document.querySelector("#timeForCase");
var riskInput = document.querySelector("#riskPercent");
var otherInput = document.querySelector("#otherPercent");
document.onload = CountEstimate();

function CountEstimate() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", function () {
            var caseNumber = parseFloat(caseNumberInput.value);

            var timeForCase = parseFloat(timeForCaseInput.value);

            var risk = parseFloat(riskInput.value);

            var other = parseFloat(otherInput.value);

            var time = document.querySelector("#time");
            var estimatedhHours = ((caseNumber * timeForCase) + ((caseNumber * timeForCase) * risk / 100) + (((caseNumber * timeForCase) * risk / 100) * other / 100)) / 60;

            time.setAttribute("style", "font-weight:bold");
            time.textContent = Math.ceil(estimatedhHours);
            
        });
    }
}

