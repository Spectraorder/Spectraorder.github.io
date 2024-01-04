document.querySelector('.theme-switch__checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

const myName = document.querySelector('.my-name');
function handleScroll() {
    const isVisible = window.scrollY >= myName.offsetTop - window.innerHeight;
    if(isVisible){
        myName.classList.add('animate');
    }
    else{
        myName.classList.remove('animate');
    }
}

window.addEventListener('scroll', handleScroll);


window.addEventListener('scroll', () =>{
    const scrollLine  = document.querySelectorAll(".parallax");
    var index = 0, length = scrollLine.length;
    for(index; index<length;index++){
        var pos = window.pageYOffset * scrollLine[index].dataset.rate;

        if(scrollLine[index].dataset.direction === 'vertical'){
            scrollLine[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        }
        else{
            var posX = window.pageYOffset * scrollLine[index].dataset.ratex;
            var posY = window.pageYOffset * scrollLine[index].dataset.ratey;
            scrollLine[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
})
