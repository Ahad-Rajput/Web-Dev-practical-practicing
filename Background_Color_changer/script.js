const body = document.getElementById('bdy')
const btn = document.getElementById('btn')

function randomColor() {
    const hexaValue = '0123456789ABCDEF';
    // const hexaValue = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']; # Both can be used either 'String' or 'List'
    let color = "#"

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexaValue.length);
        color += hexaValue[randomIndex];
    }
    return color;
}

btn.addEventListener('click', () => {
    const btnColor = randomColor();
    body.style.backgroundColor = btnColor;
})