document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('smoothie-order-form');
    const orderSummary = document.getElementById('order-summary');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const smoothie = document.getElementById('smoothie').value;
        const size = document.getElementById('size').value;
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked'))
            .map(checkbox => checkbox.value);

        // Create order summary
        const summary = `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Smoothie:</strong> ${smoothie}</p>
            <p><strong>Size:</strong> ${size}</p>
            <p><strong>Extras:</strong> ${extras.length > 0 ? extras.join(', ') : 'None'}</p>
        `;

        orderSummary.innerHTML = summary;

        // Play a sound effect when the order is placed
        const orderSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
        orderSound.play();
    });
});
