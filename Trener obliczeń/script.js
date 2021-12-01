let process = "dodawanie";
let result = 0;
let action;
let test = false;
let testX = 10;
let testY = 0;
let points = 0;

window.onload = changeAction(process);

function changeOperation (x){
    process = x;
    changeAction(process);
}

function changeAction (action){
    let a = generateRandomNumber(1, 100)
    let b;
    switch (action){
        case "dodawanie":
            b = generateRandomNumber(1, 100)
            action = a + " + " + b + " = ";
            result = a+b;
            break;
        case "odejmowanie":
            b = generateRandomNumber(1, a)
            action = a + " - " + b + " = ";
            result = a-b;
            break;
        case "mnozenie":
            a = generateRandomNumber(1, 9)
            b = generateRandomNumber(1, 9)
            action = a + " * " + b + " = ";
            result = a*b;
            break;
        case "dzielenie":
            do {
                b = generateRandomNumber(1, 100)
            }while (a%b)
            action = a + " / " + b + " = ";
            result = a/b;
            break;
    }

    document.getElementById("process").innerText = action;
}

function generateRandomNumber(min, max){
    return Math.floor((Math.random() * (max - min)) + min);
}

function check(){
     xx = Number(document.getElementById("result").value);
    if (xx === result){
        if (test){
            points++;
            testY++;
            document.getElementById("pointsH").innerText = "Twoje punkty: "+points;
        }
        document.getElementById("odpowiedz").innerText = "wynik poprawny";
    }else {
        if (test){
            testY++;
        }
        document.getElementById("odpowiedz").innerText = "Wyni nie poprawny";
        document.getElementById("zadania").innerText = testY+" / "+testX;
    }
    if (test){
        document.getElementById("zadania").innerText = testY+" / "+testX;
        testFunctionality();
    }
    if (testX <= testY){
        test = false;
        alert("Twoje punkty to "+points);
    }
}

function startTest(){
    test = true;
    document.getElementById("zadania").innerText = testY+" / "+testX;
    document.getElementById("zadania").hidden = false;
    document.getElementById("pointsH").hidden = false;
    testFunctionality();
}

function testFunctionality(){
        let x = generateRandomNumber(1, 4);
        switch (x){
            case 1:
                process = "dodawanie";
                break;
            case 2:
                process = "odejmowanie";
                break;
            case 3:
                process = "mnozenie";
                break;
            case 4:
                process = "dzielenie";
                break;
        }
        changeAction(process);
}