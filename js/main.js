// Redirigir a la página de inicio al dar click en el logo
function redirectToHome() {
	window.location.href = '/';
}

// Funcionalidad botón flotante
document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopButton = document.getElementById('btn-ir-arriba');
	scrollToTopButton.style.display = 'none';
	window.addEventListener('scroll', () => {
		if (window.scrollY > 10) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	});

	scrollToTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});

// Formulario de contacto (Funcionalidad temporal)
const contactoForm = document.getElementById('contact-form');

contactoForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const nombre = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const mensaje = document.getElementById('message').value;

	alert(
		'Nuevo Mensaje - Nombre: ' +
			nombre +
			'- Email: ' +
			email +
			'- Mensaje: ' +
			mensaje
	);

	contactoForm.reset();
});
