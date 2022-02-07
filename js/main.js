let a = 0;

document.getElementById('darkbtn').addEventListener('click', function () 
{document.body.classList.toggle('dark');
if (a==0){
    this.textContent =('');
    a++;
}else {
    this.textContent =('');
    a=0;
}
});







  
let elmenu__burger = document.getElementById('menuBurger');
let elheadermenu = document.getElementById('headerMenu');
let elIcon = document.getElementById('icon');

let count = 0;
elmenu__burger.addEventListener('click', function () {
  elheadermenu.classList.toggle('show');
  if (count == 0) {
    elmenu__burger.style.color = '#02897A';
    elIcon.className = "bx bx-x";
    count++;
  } else {
    elmenu__burger.style.color = '#02897a';
    elIcon.className = "bx bx-menu";
    count = 0;
  }
})