const colorPicker = document.getElementById('colorPicker');
const colorCode = document.getElementById('colorCode');
const colorButtons = document.querySelectorAll('.color-buttons button');

colorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
    colorCode.textContent = color;
});

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        document.body.style.backgroundColor = color;
        colorCode.textContent = color;
        colorPicker.value = color;
    });
});