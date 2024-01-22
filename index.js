const form = document.querySelector('#form');
const tbody = document.querySelector('tbody');
const inputActivity = document.querySelector('#activity');
const inputGrade = document.querySelector('#grade');
const inputGradeArray = [];
const inputActivityArray = [];
const initialMean = parseFloat(prompt('What is the initial mean?'));

function addRow(){
    const tr = document.createElement('tr');

    const activityCell = document.createElement('td');
    activityCell.textContent = inputActivity.value;
    tr.appendChild(activityCell);

    const gradeCell = document.createElement('td');
    gradeCell.textContent = inputGrade.value;
    tr.appendChild(gradeCell);

    const emoticonCell = document.createElement('td')
    if (inputGrade.value >= initialMean) {
        emoticonCell.innerHTML = '<svg class="happyEmoticon" alt="Happy Emoji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30" xml:space="preserve"><path d="M15 952.36c-8.27 0-15 6.73-15 15s6.73 15 15 15 15-6.73 15-15c0-8.31-6.73-15-15-15zm-5.68 7.3c1.58 0 2.84 1.26 2.84 2.84s-1.26 2.84-2.84 2.84-2.84-1.26-2.84-2.84 1.26-2.84 2.84-2.84zm11.76 0c1.58 0 2.84 1.26 2.84 2.84s-1.26 2.84-2.84 2.84-2.84-1.26-2.84-2.84 1.26-2.84 2.84-2.84zm1.62 11.31c.45-.04.85.28.85.77 0 .2-.04.41-.16.53a10.12 10.12 0 0 1-8.39 4.42c-3.45 0-6.53-1.74-8.35-4.42-.24-.36-.16-.85.2-1.14.12-.08.24-.12.36-.16.28-.04.61.08.77.36 1.54 2.23 4.09 3.73 7.01 3.73s5.47-1.46 7.05-3.73c.18-.2.38-.36.66-.36z" transform="translate(0 -952.362)"/></svg>'
    } else {
        emoticonCell.innerHTML = '<svg class="sadEmoticon" alt="Sad Emoji" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30" xml:space="preserve"><path d="M15 0c8.28 0 15 6.72 15 15s-6.72 15-15 15S0 23.28 0 15 6.72 0 15 0zm5.74 9.17c-1.29 0-2.3 1.04-2.3 2.3 0 1.29 1.04 2.3 2.3 2.3a2.3 2.3 0 0 0 0-4.6zm-11.48 0c-1.29 0-2.3 1.04-2.3 2.3 0 1.29 1.04 2.3 2.3 2.3s2.3-1.04 2.3-2.3-1.04-2.3-2.3-2.3zm12.73 12.09a8.765 8.765 0 0 0-3.13-2.45c-1.17-.55-2.48-.86-3.87-.86s-2.7.31-3.87.86a9.033 9.033 0 0 0-3.13 2.45c-.34.43-.28 1.04.15 1.41.43.37 1.04.28 1.41-.15a6.63 6.63 0 0 1 2.42-1.9c.92-.43 1.93-.67 3.01-.67s2.09.25 3.01.67c.95.46 1.78 1.1 2.42 1.9.34.43.98.49 1.41.15.45-.34.51-.98.17-1.41z"/></svg>'
    }
    tr.appendChild(emoticonCell)

    tbody.appendChild(tr);
}

function calcMean(){
    const sumInput = inputGradeArray.reduce((a, b) => a + b, 0);
    const meanResult = sumInput / inputGradeArray.length;;
    return meanResult.toFixed(2);
}

function addMeanValue(){
    const meanValue = document.getElementById('mean');
    meanValue.textContent = calcMean();
}

function finalResult(){
    const finalResult = document.getElementById('finalResult');
    if(calcMean() >= initialMean){
        finalResult.innerHTML = '<span class="result approved">Aprovado</span>'
    }else{
        finalResult.innerHTML = '<span class="result disapproved">Reprovado</span>'
    }
}

function CheckerActivity(){
    if (inputActivityArray.includes(inputActivity.value)){
        alert('Atividade já cadastrada!');
    } else {
        inputActivityArray.push(inputActivity.value);
        addRow();
        calcMean();
        addMeanValue();
        finalResult();
    }
}

function clearFields(){
    inputActivity.value = '';
    inputGrade.value = '';
}

form.addEventListener('submit', (e) => {
    inputGradeArray.push(parseFloat(inputGrade.value));
    e.preventDefault();
    CheckerActivity();
    clearFields();
})