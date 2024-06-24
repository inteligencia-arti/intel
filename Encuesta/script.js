const studentInfo = document.getElementById('student-info');

const gradeSelection = document.getElementById('grade-selection');

const testSection = document.getElementById('test');

const diagnosisSection = document.getElementById('diagnosis');

const diagnosisBtn = document.getElementById('diagnosis-btn');

const diagnosisResult = document.getElementById('diagnosis-result');


let studentData = {};

let questions = [];

let diagnosis = '';


// Función para generar preguntas según el grado seleccionado

function generateQuestions(grade) {

    switch (grade) {

        case '1ero':

            questions = [

                { question: '¿Cuál es el número que sigue a 5?', options: ['6', '7', '8', '9'] },

                { question: '¿Cuál es el color del cielo?', options: ['Azul', 'Rojo', 'Verde', 'Amarillo'] },

                //...

            ];

            break;

        case '2do':

            questions = [

                { question: '¿Cuál es el número que sigue a 10?', options: ['11', '12', '13', '14'] },

                { question: '¿Cuál es el nombre del planeta donde vivimos?', options: ['Tierra', 'Marte', 'Júpiter', 'Saturno'] },

                //...

            ];

            break;

        //...

    }

}


// Función para mostrar preguntas en la sección de test

function showQuestions() {

    const questionHTML = questions.map((question, index) => {

        return `

            <div class="question">

                <label>${question.question}</label>

                ${question.options.map((option, optionIndex) => {

                    return `

                        <input type="radio" name="question-${index}" value="${option}">

                        <label>${option}</label>

                    `;

                }).join('')}

            </div>

        `;

    }).join('');

    testSection.innerHTML = questionHTML;

}


// Función para realizar diagnóstico según las respuestas del test

function makeDiagnosis() {

    const answers = [];

    questions.forEach((question, index) => {

        const answer = document.querySelector(`input[name="question-${index}"]:checked`);

        answers.push(answer.value);

    });

    // Lógica para determinar el diagnóstico según las respuestas

    diagnosis = 'Diagnóstico: ';

    if (answers.includes('incorrecta')) {

        diagnosis += 'El estudiante presenta dificultades en matemáticas.';

    }

    if (answers.includes('otra incorrecta')) {

        diagnosis += 'El estudiante presenta dificultades en biología.';

    }

    //...

    diagnosisResult.innerHTML = diagnosis;

}


// Event listeners

gradeSelection.addEventListener('change', (e) => {

    const grade = e.target.value;

    generateQuestions(grade);

    showQuestions();

});


diagnosisBtn.addEventListener('click', () => {

    makeDiagnosis();

});
