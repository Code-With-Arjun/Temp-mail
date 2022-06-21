let inputBox = document.getElementById('input-box');
// ------------variable declaration------------
let key = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let domain = ['gmail', 'in', 'email', 'hotmail', 'org', 'arce'];
let splitKey = key.split("");
let splitNum = num.split("");
// -----------function mailGenerator------------
function mailGenerator() {
    let keyValue = "";
    let numValue = "";
    let domainValue;
    for (i = 0; i < 5; i++) {
        keyValue += splitKey[Math.trunc(Math.random() * 26)];
    }
    for (i = 0; i < 4; i++) {
        numValue += splitNum[Math.trunc(Math.random() * 10)];
    }
    domainValue = domain[Math.trunc(Math.random() * 6)];
    inputBox.value = keyValue + numValue + '@' + domainValue + '.com';
}


// ----------------window onload---------------------
window.addEventListener('load', () => {

    inputBox.value = "";
    inputBox.placeholder = "loading";

    setInterval(() => {
        inputBox.placeholder += ".";
    }, 1000)
    setTimeout(() => {
        mailGenerator();
    }, 3000)


})

// -----------------------delete-button----------------

document.querySelector('.delete').addEventListener('click', () => {
    inputBox.value = "";
    inputBox.placeholder = "loading";
    setInterval(() => {
        inputBox.placeholder += ".";
    }, 1000)
    setTimeout(() => {
        mailGenerator();
    }, 3000)
})

// -----------------------new-button----------------
document.querySelector('.new').addEventListener('click', () => {

    inputBox.value = "";
    inputBox.placeholder = "loading";

    setInterval(() => {
        inputBox.placeholder += ".";
    }, 1000)
    setTimeout(() => {
        mailGenerator();
    }, 3000)
})

// -----------------------copy-button----------------
document.querySelector('.copy').addEventListener('click', () => {
    inputBox.select();
    navigator.clipboard.writeText(inputBox.value);
})
// -----------------------refresh-button----------------
document.querySelector('.refresh').addEventListener('click', () => {
    let e = inputBox.value;
    inputBox.value = "";
    inputBox.placeholder = "loading";

    setInterval(() => {
        inputBox.placeholder += ".";
    }, 1000)
    setTimeout(() => {
        inputBox.value = e;
    }, 3000)
})