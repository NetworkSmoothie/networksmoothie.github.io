document.addEventListener('DOMContentLoaded', (event) => {
    // Typing effect
    const text = "Welcome to my retro webpage!";
    const typingElement = document.getElementById('typing-effect');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Start blinking after typing is complete
            typingElement.classList.add('blink');
        }
    }

    typeWriter();

    // Add hover sound effect to links
    const links = document.getElementsByTagName('a');
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...'); // Base64 encoded short beep sound

    for (let link of links) {
        link.addEventListener('mouseenter', () => {
            hoverSound.play();
        });
    }
});