let title = document.getElementsByTagName('div')
console.log(title)

let fullName = prompt("Lutfen adinizi giriniz: ")

let grit = document.querySelector("#grit")

grit.innerHTML =`${grit.innerHTML} <small style="color:blue" >${fullName}</small>`
