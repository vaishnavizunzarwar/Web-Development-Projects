let bar = document.querySelector('#bar');
let navbar = document.querySelector('.nav-links');

bar.onclick =()=>{
    bar.classList.toggle('fa-solid fa-bars');
    navbar.classList.toggle('active');
}