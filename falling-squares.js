const header = document.querySelector('header');
const colors = ['#99B898', '#FECEAB', '#E84A5F', '#2A363B'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function spawnSquare() {
    const square = document.createElement('div');
    square.classList.add('falling-square');

    // Set the square to a random color from the list
    square.style.backgroundColor = getRandomColor();

    // Position the square at a random horizontal position
    square.style.left = Math.random() * header.clientWidth + 'px';

    // Set a random rotation angle
    square.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';

    header.appendChild(square);

    // Animation
    square.animate([
        { top: '-10px' }, 
        { top: header.clientHeight + 'px', offset: 0.99 },
        { top: header.clientHeight + 'px', opacity: 0 }
    ], {
        duration: Math.random() * 2000 + 3000, // Random duration between 3-5 seconds
        easing: 'linear'
    }).onfinish = () => {
        header.removeChild(square);
    };
}

function startAnimation() {
    setInterval(spawnSquare, 50); // modify interval (increase to reduce quantity, decrease or move closer to 0 to increase)
}

window.addEventListener('load', startAnimation);
