let menu = document.querySelector('.menu');
let active = document.querySelector('.links');

menu.addEventListener('click',()=>{
    active.classList.toggle('active');
})
document.querySelectorAll('.links a').forEach(n=>n.addEventListener('click',()=>{
    active.classList.remove('active');
}))