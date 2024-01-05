const path = document.querySelector('.line-container svg path');
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () =>{
    // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const ratio = (window.scrollY - 200) / 1800;
    if(ratio<=1){
        const scrollPercentage = easeInOutQuad(ratio);
        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = drawLength - pathLength;
    }
    
})

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}