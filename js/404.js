const outerCircle = document.querySelectorAll('.circle');
const innerCircle = document.querySelectorAll('.one');
const orangeColumnOne = document.querySelectorAll('.two');
const orangeColumnTwo = document.querySelectorAll('.three');
const text = document.querySelectorAll('.p404');

const mousePos = {x:0, y:0};

window.addEventListener("mousemove", function(e){
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
});

function inverseMouseAnimation() {
    let mouseX = mousePos.x;
    let mouseY = mousePos.y;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const outerCircleHorizontalOffset = ((mouseX - windowWidth / 2) / windowWidth) * 40;
    const outerCircleVerticalOffset = ((mouseY - windowHeight / 2) / windowHeight) * 20;

    const innerCircleHorizontalOffset = ((mouseX - windowWidth / 2) / windowWidth) * 30;
    const innerCircleVerticalOffset = ((mouseY - windowHeight / 2) / windowHeight) * 15;

    const orangeColumnHorizontalOffset = ((mouseX - windowWidth / 2) / windowWidth) * 20;
    const orangeColumnVerticalOffset = ((mouseY - windowHeight / 2) / windowHeight) * 10;

    const textHorizontalOffset = ((mouseX - windowWidth / 2) / windowWidth) * 10;
    const textVerticalOffset = ((mouseY - windowHeight / 2) / windowHeight) * 5;

    outerCircle.forEach((element) => {
        element.style.transform = `translate(${-outerCircleHorizontalOffset}%, ${-outerCircleVerticalOffset}%)`;
    });

    innerCircle.forEach((element) => {
        element.style.transform = `translate(${-innerCircleHorizontalOffset}%, ${-innerCircleVerticalOffset}%)`;
    });

    orangeColumnOne.forEach((element) => {
        element.style.transform = `translate(${-orangeColumnHorizontalOffset}%, ${-orangeColumnVerticalOffset}%)`;
    });

    orangeColumnTwo.forEach((element) => {
        element.style.transform = `translate(${-orangeColumnHorizontalOffset}%, ${-orangeColumnVerticalOffset}%)`;
    });

    text.forEach((element, index) => {
        element.style.transform = `translate(${-textHorizontalOffset}%, ${-textVerticalOffset}%)`;
    });
    requestAnimationFrame(inverseMouseAnimation);
}
  
requestAnimationFrame(inverseMouseAnimation);
  