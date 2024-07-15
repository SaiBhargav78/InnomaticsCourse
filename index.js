// If-Else Conditional Statements
function checksign(){
    let num = Number(document.getElementById("num").value);
    if(num>0){
        document.getElementById("result1").innerHTML = "Positive";
    }
    else if(num === 0){
        document.getElementById("result1").innerHTML = "Zero";
    }
    else{
        document.getElementById("result1").innerHTML = "Negative";
    }
}

// Switch-Case Statements
function checkday(){
    let switchnum = Number(document.getElementById("switch").value);
    switch(switchnum){
        case 1:
            document.getElementById("result2").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("result2").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("result2").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("result2").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("result2").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("result2").innerHTML = "Saturday";
            break;
        case 7:
            document.getElementById("result2").innerHTML = "Sunday";
            break;
        default:
            break;
    }
}

// Ternary Operator
function checkage(){
    let age = Number(document.getElementById("age").value);
    let checked = age >= 18 ? document.getElementById("result3").innerHTML = "Adult" : document.getElementById("result3").innerHTML = "Minor";
}

// For Loop
function onetoten(){
    document.getElementById("result4").innerHTML = "";
    for(var i = 1; i<10; i++){
        document.getElementById("result4").innerHTML += i + " ";
    }
    document.getElementById("result4").innerHTML += 10;
}

// Reverse For Loop
function tentoone(){
    document.getElementById("result5").innerHTML = "";
    for(var i = 10; i>1; i--){
        document.getElementById("result5").innerHTML += i + " ";
    }
    document.getElementById("result5").innerHTML += 1;
}
