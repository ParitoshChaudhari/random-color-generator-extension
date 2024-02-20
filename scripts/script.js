function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

let btnGenerateColor = document.getElementById('generate_color');
let preview = document.getElementById('color_preview');
let generatedColorCode = document.getElementById('color_code');

btnGenerateColor.addEventListener('click',function (){
    let newColor = getRandomColor();
    preview.style.backgroundColor = newColor;
    generatedColorCode.innerText = newColor;
});