const form = document.getElementById('test-form');

const submitButton = document.getElementById('submit');

const resultsDiv = document.getElementById('results');


submitButton.addEventListener('click', (e) => {

  e.preventDefault();

  const name = document.getElementById('name').value;

  const age = document.getElementById('age').value;

  const grade = document.getElementById('grade').value;

  const answers = [];

  const questions = form.querySelectorAll('input[type="radio"]');

  questions.forEach((question) => {

    if (question.checked) {

      answers.push(question.value);

    }

  });

  const score = calculateScore(answers);

  displayResults(name, age, grade, score);

});


function calculateScore(answers) {

  return answers.filter((answer) => answer === 'si').length;

}


function displayResults(name, age, grade, score) {

  let resultText = '';

  if (score === 0) {

    resultText = `No hay indicios de depresión en ${name}.`;

  } else if (score <= 2) {

    resultText = `Posible indicio de síntomas de depresión en ${name}. Se recomienda seguir monitoreando.`;

  } else if (score <= 5) {

    resultText = `Posiblemente ${name} esté experimentando síntomas de depresión. Se sugiere una evaluación más profunda por parte de un profesional.`;

  } else {

    resultText = `No hay diagnóstico definitivo de depresión en ${name}, pero se recomienda una evaluación médica para descartar posibles problemas.`;

  }

  resultsDiv.innerHTML = `<p>${resultText}</p>

                          <p>Nombre: ${name}</p>

                          <p>Edad: ${age}</p>

                          <p>Grado que estudia: ${grade}</p>

                          <p>Número de preguntas respondidas afirmativamente: ${score}</p>`;

}