// Obtener el formulario

const form = document.getElementById('diagnostic-form');


// Agregar evento de submit al formulario

form.addEventListener('submit', (e) => {

    e.preventDefault();


    // Obtener los valores del formulario

    const name = document.getElementById('name').value;

    const lastname = document.getElementById('lastname').value;

    const age = document.getElementById('age').value;

    const birthdate = document.getElementById('birthdate').value;

    const gender = document.getElementById('gender').value;

    const grade = document.getElementById('grade').value;

    const difficulty = document.getElementById('difficulty').value;

    const category = document.getElementById('category').value;

    const diagnosis = document.getElementById('diagnosis').value;


    // Crear un objeto con los valores del formulario

    const studentData = {

        name,

        lastname,

        age,

        birthdate,

        gender,

        grade,

        difficulty,

        category,

        diagnosis

    };


    // Mostrar el diagnóstico

    const diagnosisText = `Diagnóstico: ${difficulty} - ${category} - ${diagnosis}`;

    alert(diagnosisText);


    // Resetear el formulario

    form.reset();

});
