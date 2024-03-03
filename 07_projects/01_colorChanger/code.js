const buttons=document.querySelectorAll('.button')
const bd=document.querySelector('body')
buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        bd.style.backgroundColor=e.target.id
        console.log(e);
        console.log(e.target);
    });
});
