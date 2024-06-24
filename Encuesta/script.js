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

    document.getElementById('diagnosis-result').innerHTML = diagnosisText;


    // Resetear el formulario

    form.reset();

});


// Agregar evento de click al botón de agregar categoría

document.getElementById('add-category-btn').addEventListener('click', () => {

    const addCategoryInput = document.getElementById('add-category');

    const categoryInput = document.getElementById('category');


    if (addCategoryInput.value !== '') {

        categoryInput.value += `, ${addCategoryInput.value}`;

        addCategoryInput.value = '';

    }

});
