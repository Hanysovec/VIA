document.querySelectorAll('input[required], select[required]').forEach(input => {
    input.addEventListener('blur', function () {
        const parentLabel = input.closest('label');
        const textElement = parentLabel.querySelector('p');

        if (!input.checkValidity()) {
            input.classList.add('invalid');
            if (textElement) {
                textElement.classList.add('invalid-text'); 
            }
        } else {
            input.classList.remove('invalid');
            if (textElement) {
                textElement.classList.remove('invalid-text');
            }
        }
    });
});
