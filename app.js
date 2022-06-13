let menu = document.querySelector('.menu');
let active = document.querySelector('.links');

menu.addEventListener('click',()=>{
    active.classList.toggle('active');
})
document.querySelectorAll('a').forEach(n=>n.addEventListener('click',()=>{
    active.classList.remove('active');
}))