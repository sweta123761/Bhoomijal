document.getElementById("waterUsageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect inputs
    const shower = parseFloat(document.getElementById("shower").value) || 0;
    const washingHands = parseFloat(document.getElementById("washingHands").value) || 0;
    const toiletFlush = parseFloat(document.getElementById("toiletFlush").value) || 0;
    const dishes = parseFloat(document.getElementById("dishes").value) || 0;
    const drinking = parseFloat(document.getElementById("drinking").value) || 0;

    // Calculate total water usage
    const totalUsage = 
        (shower * 10) + 
        (washingHands * 2) + 
        (toiletFlush * 6) + 
        (dishes * 20) + 
        drinking;

    const dailyLimit = 150; // Daily limit in liters
    const resultDiv = document.getElementById("result");

    // Display the result
    if (totalUsage > dailyLimit) {
        resultDiv.innerHTML = <p style="color: red;">You have overused water today! Total usage: <strong>${totalUsage} liters</strong>. Please try to save water!</p>;
    } else {
        resultDiv.innerHTML = <p style="color: pink;">Congratulations! You have saved water today! Total usage: <strong>${totalUsage} liters</strong>. Keep up the good work!</p>;
    }
    document.getElementById("themeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
});