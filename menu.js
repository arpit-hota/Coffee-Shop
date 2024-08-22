function calculateTotal() {
    const form = document.getElementById('cart-form');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    let total = 0;

    checkboxes.forEach(checkbox => {
        total += parseFloat(checkbox.value);
    });

    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}