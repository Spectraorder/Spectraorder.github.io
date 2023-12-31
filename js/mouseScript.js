const mousePos = {x:0, y:0};
const circleTails = document.querySelectorAll(".circleTail");

const colors = [
    "#2c00cc", 
    "#6002d3", 
    "#9603db", 
    "#cf05e2", 
    "#e907c7", 
    "#f00997", 
    "#f80b65", 
    "#ff0d31"
]
circleTails.forEach(function (circle, index){
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
    // bug: if circle has higher zindex, all buttons wont be responsive
    circle.style.zIndex = -index;
});

window.addEventListener("mousemove", function(e){
    mousePos.x = e.clientX;
    mousePos.y = e.clientY + getScrollTop();
    circleTails.forEach(tail => {
        tail.style.transform = 'translate(0%, 0%)';
    });
});

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function animateCircles() { 

    let x = mousePos.x;
    let y = mousePos.y;

    circleTails.forEach(function (circle, index){
        circle.style.left = x - 6 + "px";
        circle.style.top = y - 6 + "px";

        circle.style.scale = (circleTails.length - index) / circleTails.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circleTails[index+1] || circleTails[0];
        x += (nextCircle.x - x) * 0.8;
        y += (nextCircle.y - y) * 0.8;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();