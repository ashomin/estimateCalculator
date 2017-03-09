
var countButton = document.querySelector("#count");
var timeEstimated = document.querySelector("#time");
countButton.addEventListener("click", function(){
    var cases = document.querySelector("#caseNum").value;
    var number = parseFloat(cases);
    var hours = (number * 15 + ((number*15)*0.3) + (((number*15)*0.3)*0.2))/60;
    
    //number * 15+ (number * 15)*0.3) + ((number*15)*0.3)*0.2)  /60 | number : 1
    console.log(hours);
});


