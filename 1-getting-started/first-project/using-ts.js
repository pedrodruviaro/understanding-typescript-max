var button = document.querySelector("button");
var input1 = document.getElementById("num1"); // ! -> sempre vai retornar um valor
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(Number(input1.value), Number(input2.value)));
    return;
});
