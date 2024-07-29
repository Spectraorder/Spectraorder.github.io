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

function adjustSVG() {
    const svgElement = document.querySelector('.line-container svg');
    const windowWidth = window.innerWidth;

    const minWidth = 2450;

    const baseScale = 1;
    const baseTranslateY = 100;

    let scale = baseScale;
    let translateY = baseTranslateY;

    if (windowWidth > minWidth) {
        const excessWidth = windowWidth - minWidth;
        
        scale = baseScale + (excessWidth / minWidth) * 2;
        translateY = baseTranslateY + (excessWidth / 10);
    }

    svgElement.style.transform = `translateX(-250px) scale(${scale}) translateY(${translateY}px)`;
}

window.addEventListener('resize', adjustSVG);
window.addEventListener('load', adjustSVG);

if(window.innerWidth>767){
    window.addEventListener('scroll', () =>{
        const scrollLine  = document.querySelectorAll(".parallax");
        var index = 0, length = scrollLine.length;
        for(index;index<length;index++){
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
}