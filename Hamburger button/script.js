// const btn = document.getElementById('btn')
const nav = document.getElementById('nav')

btn.addEventListener('click',()=> {
    nav.classlist.toggle('active');
    btn.classList.toggle('active');
});