const mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'mainContainer');

const btn = document.createElement('button');
btn.innerText = "New Grid";
btn.style.fontSize = '25px';
document.body.append(btn);

for(let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    mainContainer.append(square);
}

document.body.append(mainContainer);

const hoverSquares = document.querySelectorAll('.square');

hovering(hoverSquares);

// let opa = 0;
// function addOpacity(){
//     return opa+=0.2;
// }

function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

function hovering(hoverSquares) {
    hoverSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.background = randomColor();
            //square.style.opacity = addOpacity();
        });
    });
}

btn.addEventListener('click', () => {
    const gridVal = Number(prompt("Enter grid size: "));

    const width = 700;
    const height = 500;
    if(gridVal <= 100) {
        document.querySelector('#mainContainer').remove();
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'mainContainer');
        for(let i = 0; i < gridVal*gridVal; i++){
            const square = document.createElement('div');
            square.setAttribute('class', 'square');
            mainContainer.append(square);
            square.style.width = width / gridVal+"px";
            square.style.height = height / gridVal+"px";
            square.style.boxSizing = 'border-box';
            square.style.border = '1px black solid';
            square.style.flexGrow = 1;
        }
        opa = 0;
        document.body.append(mainContainer);
    }
    const hoverSquares = document.querySelectorAll('.square');
    hovering(hoverSquares);
});