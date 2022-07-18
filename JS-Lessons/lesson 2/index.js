let item = document.querySelector("ul#list>li:last-child");
item.innerHTML = "last child changed";
console.log(item);

let ulDom = document.querySelector("ul#list");
let liDom = document.createElement("li");

liDom.innerHTML = "yeni item";


ulDom.append(liDom); // create new item last child
// ulDom.prepend(liDom); create new item first child
