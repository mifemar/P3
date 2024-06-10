
document.addEventListener('DOMContentLoaded', () => {
    
    // Función para hacer vibrar el logo
    const logo = document.getElementById('logo');
    let isVibrating = false;
    logo.addEventListener('mouseover', () => {
        if (!isVibrating) {
            isVibrating = true;
            startVibration();
        }
    });
    function startVibration() {
        const amplitude = 5;
        const duration = 200;
        let currentPosition = 0;
        let direction = 1;
        const moveLogo = () => {
            currentPosition += amplitude * direction;
            logo.style.transform = `translateX(${currentPosition}px)`;
            if (Math.abs(currentPosition) >= amplitude) {
                direction *= -1;
            }
            if (isVibrating) {
                setTimeout(moveLogo, duration);
            } else {
                logo.style.transform = '';
            }
        };
        moveLogo();
    }
    logo.addEventListener('mouseout', () => {
        isVibrating = false;
    });
    
    // Función para mostrar un mensaje de agradecimiento al enviar el formulario de la newsletter
    document.getElementById('newsletter-form').addEventListener('submit', (event) => {
        //event.preventDefault();
        alert('¡Muchas gracias por suscribirte a nuestra newsletter!');
        document.getElementById('newsletter-form').submit();
    });
});