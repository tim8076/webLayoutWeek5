const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(link => {
    link.addEventListener('click',function(e){
        e.preventDefault;
        headerLinks.forEach(link=>{
            link.classList.remove('active');
        })
        e.target.parentElement.classList.add('active')
    })
})