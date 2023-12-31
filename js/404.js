const outerCircle = document.querySelectorAll('.circle');
const innerCircle = document.querySelectorAll('.one');
const orangeColumnOne = document.querySelectorAll('.two');
const orangeColumnTwo = document.querySelectorAll('.three');
const text = document.querySelectorAll('.p404');

function inverseMouseAnimation() {
    window.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
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
            element.style.transform = `translate(${-orangeColumnHorizontalOffset}%, ${-orangeColumnVerticalOffset}%)`;
        });
    });
    requestAnimationFrame(inverseMouseAnimation);
}
  
requestAnimationFrame(inverseMouseAnimation);
  