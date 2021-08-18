number1 = 69
number2 = 420

//Function declaration

function add1(number1, number2) {
    return number1 * number1;
}

function add2(number1, number2) {
    return number2 * number2;
}

function add3(result1, result2){
    return result1 + result2
}

function add4(result3){
    return result3 * result3
}

const result1 = add1(number1, number2);
//console.log(result1);

const result2 = add2(number1, number2);
//console.log(result2);

const result3 = add3(result1, result2);
//console.log(result3)

const result4 = add4(result3);
console.log(result4)

//Function expression

const plus1 = function (number1, number2) {
    return number1 * number1;
};

const plus2 = function (number1, number2) {
    return number2 * number2;
};

const plus3 = function (uitkomst1, uitkomst2) {
    return uitkomst1 + uitkomst2;
};

const plus4 = function (uitkomst3) {
    return uitkomst3 * uitkomst3;
};

const uitkomst1 = plus1(number1, number2);
//console.log(uitkomst1);

const uitkomst2 = plus2(number1, number2);
//console.log(uitkomst2);

const uitkomst3 = plus3(uitkomst1, uitkomst2);
//console.log(uitkomst3);

const uitkomst4 = plus4(uitkomst3);
console.log(uitkomst4);


//Arrow functions
const som1 = (number1, number2) => {
    return number1 * number1;
};

const som2 = (number1, number2) => {
    return number2 * number2;
};

const som3 = (antwoord1, antwoord2) => {
    return antwoord1 + antwoord2;
};

const som4 = (antwoord3) => {
    return antwoord3 * antwoord3;
};


const antwoord1 = som1(number1, number2);
//console.log(antwoord1);

const antwoord2 = som2(number1, number2);
//console.log(antwoord2);

const antwoord3 = som3(antwoord1, antwoord2);
//console.log(antwoord3);

const antwoord4 = som4(antwoord3);
console.log(antwoord4);