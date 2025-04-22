let h1=document.getElementById("title");

h1.onmouseover=function(){ title.textContent=
    "Quita de encima!!!"};
h1.onmouseout=function(){ title.textContent= "Soy un título" }; 

let button=document.getElementById("btn"); 
let counter = 0; 
button.onclick=function(){counter++; button.textContent = `clicked ${counter} times`;
};

let p = document.getElementById("paragraf");

document.addEventListener("keydown", function(event) {
  p.textContent = `has pulsado la tecla ${event.key}`;
});

document.addEventListener("keyup", function() {
  p.textContent = "esperando entrada de teclado...";
});
let input = document.getElementById("input");

let palabras = ["قمر", "شمس", "بحر", "جبل", "شجرة"];
let index = 0;

let h2 = document.getElementById("display");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", function () {
    index++; // 1. نزيد الرقم علشان نروح للكلمة اللي بعدها
  
    if (index >= palabras.length) {
      index = 0; // 2. إذا وصلنا لآخر وحدة، نرجع لأول وحدة
    }
  
    h2.textContent = palabras[index]; 
  });
  
  prevBtn.addEventListener("click",function() {index--; 

    if (index < 0) {
      index = palabras.length - 1; 
    }
  
    h2.textContent = palabras[index]; 
  });

