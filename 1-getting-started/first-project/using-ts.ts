const button = document.querySelector("button")
const input1 = document.getElementById("num1")! as HTMLInputElement // ! -> sempre vai retornar um valor
const input2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number): number {
  return num1 + num2
}

button?.addEventListener("click", function () {
  console.log(add(Number(input1.value), Number(input2.value)))
  return
})
