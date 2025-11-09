

async function main() {

    // User input

    let total = parseFloat(prompt("Enter total cost of goods:"));
    let cash = parseFloat(prompt("Enter amount received by customer:"));
    let discountCode = parseInt(prompt("Enter a discount code between 0 - 5 :"));

    // Calculate discount

    let discountRate;

    switch (discountCode) {
        case 0:
            discountRate = 0;
            break;
        case 1:
            discountRate = 0.10;
            break;
        case 2:
            discountRate = 0.15;
            break;
        case 3:
            discountRate = 0.25;
            break;
        case 4:
            discountRate = 0.35;
            break;
        case 5:
            discountRate = 0.40;
            break;
        default:
            alert("Invalid discount code! Please enter a number between 0 and 5.");
            return;
    }

    // Discount Calculation 

    let discountAmount = total * discountRate;
    let totalAfterDiscount = total - discountAmount;

    // Calculate change

    let change = cash - totalAfterDiscount;

    // Output

    if (change < 0) {
        alert("Insufficient Payment!");
    } else {
        alert("Change back to customer: $" + change.toFixed(2));

    }
    main();
}
