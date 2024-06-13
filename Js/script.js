//  let elm = document.querySelectorAll('p.intro');

for (i = 0; i < elm.length; i++) {
    elm[i].innerHTML = "how are you";
}

let li = document.getElementById("list");
let prt = li.parentElement;
prt.innerHTML = "Hello";
let node = li.children;

console.log(node);

// let elm= document.getElementById("list");
let node1 = elm.nextElementSibling;

console.log(node1);

let elm = document.getElementById("list");
elm.innerHTML = "<h1>Hello everyone</h1>";

list.innerHTML = "Arbaaz";



console.log(elm);

let elm = document.getElementById("list");

let h1 = document.createElement("h1");
h1.innerHTML = "this is h1 tag"

elm.appendChild(h1);

let elm = document.getElementById("intro");

let item = document.createElement("li");
item.textContent = "new list 5"

elm.appendChild(item);

let elm = document.getElementById("intro");

let item = document.createElement("li");
item.textContent = "new list 5";

let pos = elm.firstElementChild.nextElementSibling.nextElementSibling;

elm.insertBefore(item, pos);

let position = document.body;

let elm = document.createElement("h1");

elm.textContent = "Hello My name is Arbaaz chouhan";

let list = document.getElementById("intro");

position.insertBefore(elm, list);

let pernt = document.getElementById("menu");

let elm = pernt.firstElementChild.nextElementSibling.nextElementSibling;

document.body.removeChild(pernt);
pernt.removeChild(elm);

let menu = document.getElementById("menu");

let clone = menu.cloneNode(true);
clone.id = "Arbaaz";
let clone1 = menu.cloneNode(true);
console.log(clone);
document.body.appendChild(clone);
document.body.appendChild(clone1);


let prent = document.getElementById("menu");

let elm = document.createElement("li");
elm.textContent = "services"

let replace = prent.firstElementChild.nextElementSibling;

prent.replaceChild(elm, replace);

let elm = document.getElementById("intro");

let html = "<h1>hello everyone</h1>";

elm.insertAdjacentElement("beforeand", html);


// [ Part- 2 ]Complete JavaScript Tutorial In 
//  Hindi for Beginners With Projects | JS Tutorial
//  in Hindi

let elm = document.getElementById("men");
let get = elm.hasAttribute("name");
console.log(get);

console.log(get);

let elm = document.getElementById("intro");

elm.style.cssText = "background-color:blue; color:pink;";

elm.style.cssText = "font-size:40px;";
elm.style.background = "black";
elm.style.color = "white"

let elm = document.getElementById("intro");

let css = getComputedStyle(elm);

console.log(css.background);

let elm = document.getElementById("intro");
console.log(elm.className);
elm.className += "dim";
console.log(elm.classList);
for (let css of elm.classList) {
    console.log(css);
}
elm.classList.add("dim");  //class add

elm.classList.remove("dim"); ///remove class

elm.classList.replace("color", "menu");
let result = elm.classList.contains("dim");
console.log(result);
elm.classList.toggle("dim");

let elm = document.getElementById("intro");

// let width = elm.offsetWidth;
// let heigth =elm.offsetHeight;

let width = elm.clientWidth;
let heigth = elm.clientHeight;

console.log(width);
console.log(heigth);

window.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        console.log("scrolling up...");
    } else if (event.deltaY > 0) {
        console.log("scrolling down..");
    }
})

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
        document.body.style.background = "red";
    } else {
        document.body.style.background = "blue";
    }
});

let x = document.getElementById("myInput");

x.addEventListener("focus", myfocusfunction);
x.addEventListener("blur", myblurfunction);

function myfocusfunction() {
    x.style.background = "black";
    x.style.color = "white";
    x.addEventListener("input", function () {
        console.log(this.value);
    })
}

function myblurfunction() {
    x.style.background = "white";

}

// let x = document.getElementById("mydiv");
let a = document.getElementById("btn");

a.addEventListener("click", btnClicked, true);
x.addEventListener("click", divClicked, true);
document.body.addEventListener("click", bodyClicked, true);

function btnClicked() {
    console.log("button clicked....");
}

function divClicked() {
    console.log(" div clicked....");
}


function bodyClicked() {
    console.log("body clicked....");
}

// let x = document.getElementById("myform");

x.addEventListener("submit", function (e) {
    e.preventDefault();
})

// let x = document.getElementById("btn1");

x.addEventListener("click", function () {

    let a;
    a = window.open("https://www.google.com/");
})

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
    window.open("https://www.google.com/search?gs_ssp=eJzj4tTP1TcwtCzKMVNgNGB0YPBirUzMyM8HADxBBY4&q=yahoo&oq=yahoo&gs_lcrp=EgZjaHJvbWUqFQgBEC4YQxiDARjHARixAxjRAxiKBTISCAAQABhDGIMBGOMCGLEDGIoFMhUIARAuGEMYgwEYxwEYsQMY0QMYigUyDwgCEAAYQxiDARixAxiKBTIPCAMQABhDGIMBGLEDGIoFMg8IBBAAGEMYgwEYsQMYigUyCQgFEAAYQxiKBTIPCAYQABhDGIMBGLEDGIoFMg8IBxAAGEMYgwEYsQMYigUyDwgIEAAYQxiDARixAxiKBTIHCAkQABiPAtIBDDM2NTk1MDhqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8#ip=1");
})

a.addEventListener("click", function () {
    a.window.close();
})

//  let x = setInterval(fn, 3000);

function fn() {
    console.log("Arbaaz");
}
let z = document.getElementById("clear");
z.addEventListener("click", function () {
    clearInterval(x);
})

console.log(screen, innerHeight);



function fn(ele) {
    return ele + 5
}
let fn = (ele) => ele + 5;
console.log(fn(10));
