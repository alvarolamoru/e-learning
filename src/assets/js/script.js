// Cargar datos desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    loadCourseData();
});

// Función para cargar datos desde localStorage
function loadCourseData() {
    var storedData = localStorage.getItem('courseData');
    if (storedData) {
        var courseData = JSON.parse(storedData);

        // Restaurar secciones y lecciones
        courseData.sections.forEach(function (section) {
            addSection(section.title, section.lessons);
        });
    }
}

// Función para guardar datos en localStorage
function saveCourseData() {
    var courseSections = document.querySelectorAll('.section');
    var sections = [];

    courseSections.forEach(function (section) {
        var sectionTitle = section.querySelector('h2').textContent;
        var lessonElements = section.querySelectorAll('.lesson');
        var lessons = [];

        lessonElements.forEach(function (lesson) {
            lessons.push(lesson.textContent);
        });

        sections.push({
            title: sectionTitle,
            lessons: lessons
        });
    });

    var courseData = {
        sections: sections
    };

    localStorage.setItem('courseData', JSON.stringify(courseData));
}

// Función para agregar una nueva sección
function addSection(title, lessons) {
    var courseContent = document.getElementById('sidebarSections');

    var section = document.createElement('div');
    section.className = 'section';
    section.innerHTML = '<h2>' + title + '</h2><button class="btn btn-secondary addLesson">Agregar Lección</button>';
    courseContent.appendChild(section);

    // Agregar lecciones preexistentes
    lessons.forEach(function (lessonTitle) {
        var lesson = document.createElement('div');
        lesson.className = 'lesson';
        lesson.textContent = lessonTitle;
        section.appendChild(lesson);
    });

    // Event listener para agregar lecciones dentro de la sección
    section.querySelector('.addLesson').addEventListener('click', function () {
        // Crear la lección con los detalles de entrada
        var lesson = document.createElement('div');
        lesson.className = 'lesson';
    
        // Campos de entrada para el título, descripción y tarea
        var lessonTitleInput = document.createElement('input');
        lessonTitleInput.type = 'text';
        lessonTitleInput.placeholder = 'Título de la lección';
        lessonTitleInput.className = 'form-control lesson-title-input';
    
        var lessonDescriptionInput = document.createElement('textarea');
        lessonDescriptionInput.placeholder = 'Descripción de la lección';
        lessonDescriptionInput.className = 'form-control lesson-description-input';
    
        var lessonTaskInput = document.createElement('textarea');
        lessonTaskInput.placeholder = 'Tarea a realizar';
        lessonTaskInput.className = 'form-control lesson-task-input';
    
        // Botón para guardar detalles de la lección
        var saveButton = document.createElement('button');
        saveButton.textContent = 'Guardar Lección';
        saveButton.className = 'btn btn-success save-lesson-button';
    
        // Event listener para guardar detalles de la lección
        saveButton.addEventListener('click', function () {
            var lessonTitle = lessonTitleInput.value;
            var lessonDescription = lessonDescriptionInput.value;
            var lessonTask = lessonTaskInput.value;
    
            // Verificar si se proporcionó un título
            if (!lessonTitle) {
                alert('Por favor, ingrese un título para la lección.');
                return;
            }
    
            // Añadir contenido interno de la lección
            lesson.innerHTML = '<h3 class="lesson-title">' + lessonTitle + '</h3><p class="lesson-description">' + lessonDescription + '</p><p class="lesson-task">' + lessonTask + '</p>';
            
            // Ocultar los campos de entrada después de guardar
            document.getElementById('lessonDetails').style.display = 'none';
    
            // Agregar la lección al contenido del curso
            section.appendChild(lesson);
    
            // Guardar datos en localStorage al agregar una lección
            saveCourseData();
        });
    
        // Agregar campos y botón al contenido de la lección
        lesson.appendChild(lessonTitleInput);
        lesson.appendChild(lessonDescriptionInput);
        lesson.appendChild(lessonTaskInput);
        lesson.appendChild(saveButton);
    
        // Mostrar los campos de entrada
        document.getElementById('lessonDetails').style.display = 'block';
    });
}

// Event listener para agregar una nueva sección cuando se hace clic en el botón
document.getElementById('addSection').addEventListener('click', function () {
    var sectionTitle = prompt('Ingrese el título de la sección:');
    if (!sectionTitle) {
        return;
    }
    addSection(sectionTitle, []);
    saveCourseData();
});
