function calculatePrice() {
    const price = parseInt(document.getElementById("cupcakeSelect").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    if (quantity < 1 || isNaN(quantity)) {
        alert("Please enter a valid quantity (1 or more).");
        return;
    }
    const total = price * quantity;
    document.getElementById("result").innerText = "Total Price: ₹" + total;
}