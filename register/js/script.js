document.querySelectorAll('input[required], select[required]').forEach(input => {
    input.addEventListener('blur', function () {
        const parentLabel = input.closest('label'); // Najdi rodičovský <label>
        const textElement = parentLabel.querySelector('p'); // Najdi <p> uvnitř <label>

        if (!input.checkValidity()) {
            input.classList.add('invalid');
            if (textElement) {
                textElement.classList.add('invalid-text'); // Přidá třídu k textu
            }
        } else {
            input.classList.remove('invalid');
            if (textElement) {
                textElement.classList.remove('invalid-text'); // Odebere třídu z textu
            }
        }
    });
});
