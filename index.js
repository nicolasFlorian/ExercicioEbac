const abSpan = document.getElementsByClassName('subtitleDecoration');
const form = document.getElementById('form');
const inputAnswer1 = document.getElementById('answer1');
const inputAnswer2 = document.getElementById('answer2');
const errorMessage = document.querySelector('.subtitleDecorationError');
const successMessage = document.querySelector('.successCard');

Array.from(abSpan).forEach(abSpan => {
    abSpan.addEventListener("click", () => {
        if(inputAnswer1.value.length == 0){
            inputAnswer1.focus();
        }else{
            inputAnswer2.focus();
        };
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueA = parseInt(inputAnswer1.value, 10);
    const valueB = parseInt(inputAnswer2.value, 10);

    if (valueB > valueA) {
        successMessage.style.display = 'flex';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'inline';
        successMessage.style.display = 'none';
    }
});

[inputAnswer1, inputAnswer2].forEach(input => {
    input.addEventListener('input', () => {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';
    });
});
