// form quantity
const minus = document.querySelector(".minus"),
plus = document.querySelector(".plus"),
num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click",()=> {
    a++;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
    console.log(a);
});

minus.addEventListener("click",()=> {
  if (a > 1){
    a--;
    a = (a < 10) ? "" + a : a;
    num.innerText = a;
  }
});