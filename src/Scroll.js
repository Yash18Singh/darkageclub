document.addEventListener('scroll', function(){
    let artwork1 = document.getElementsByClassName('home__artwork');

    if(window.pageYOffset>=20 && window.pageYOffset<=100){
        artwork1.classList.add('animate');
    }
});