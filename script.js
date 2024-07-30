function Salmon() {
    let num1 = parseFloat(document.getElementById('lock').value);
    let num2 = parseFloat(document.getElementById('block').value);
    return { num1, num2 };
}

function Sandia() {
    let { num1, num2 } = Salmon();
    document.getElementById('result').value = num1 + num2;
}

function lemon() {
    let { num1, num2 } = Salmon();
    document.getElementById('result').value = num1 * num2;
}

function limon() {
    let { num1, num2 } = Salmon();
    document.getElementById('result').value = num1 / num2;
}

function Naranja() {
    let { num1, num2 } = Salmon();
    document.getElementById('result').value = num1 - num2 ;
}

function Toronja() {
    let num1 = parseFloat(document.getElementById('lock').value);
    document.getElementById('result').value = Math.sqrt(num1);
}

function Manbdarina() {
    let num1 = parseFloat(document.getElementById('lock').value);
    document.getElementById('result').value = Math.pow(num1, 2);
}

function Pitaya() {
    let num1 = parseFloat(document.getElementById('lock').value);
    let num2 = parseFloat(document.getElementById('block').value);
    document.getElementById('result').value =Math.abs( Math.max(num1, num2));
}

function Manzana() {
    let num1 = parseFloat(document.getElementById('lock').value);
    let num2 = parseFloat(document.getElementById('block').value);
    document.getElementById('result').value = Math.trunc( Math.random() * (num2 - num1) + num1);
}

function Sidra() {
    let result = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.round(result);
}

function Pera() {
    let result = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.floor(result);
}

function Nuez() {
    let result = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = Math.ceil(result);
}