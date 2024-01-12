const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const colorBox = document.getElementById('colorBox');
const resultText = document.getElementById('resultText');

function updateColor() {
    const redValue = redRange.value;
    const greenValue = greenRange.value;
    const blueValue = blueRange.value;

    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = rgbColor;

    resultText.textContent = `RGB: ${redValue} / ${greenValue} / ${blueValue}`;
    console.log('Input Event - RGB:', redValue, greenValue, blueValue);
}

function handleChange() {
    console.log('Change Event - RGB:', redRange.value, greenRange.value, blueRange.value);
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

redRange.addEventListener('change', handleChange);
greenRange.addEventListener('change', handleChange);
blueRange.addEventListener('change', handleChange);

// Inicializar el color y el texto
updateColor();