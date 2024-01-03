document.querySelector('.theme-switch__checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

const myName = document.querySelector('.my-name');
function handleScroll() {
    const isVisible = window.scrollY >= myName.offsetTop - window.innerHeight;
    console.log(isVisible);
    console.log(window.scrollY);
    if(isVisible){
        myName.classList.add('animate');
    }
    else{
        myName.classList.remove('animate');
    }
}

window.addEventListener('scroll', handleScroll);