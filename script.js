const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer');

for(let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    mainContainer.append(square);
}

document.body.append(mainContainer);

const hoverSquares = document.querySelectorAll('.square');

function hovering(hoverSquares) {
    hoverSquares.forEach(square => {
        square.addEventListener('mousemove', () =>
        square.style.backgroundColor = `rgb(0,0,0)`)
    })
}

hovering(hoverSquares);