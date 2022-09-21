const menuBtn = document.querySelector('.menuBtn');
const gnb = document.querySelector('.gnb');
const icons = document.querySelector('.icons');

menuBtn.addEventListener('click', ()=>{
    gnb.classList.toggle('active');
    icons.classList.toggle('active');
});