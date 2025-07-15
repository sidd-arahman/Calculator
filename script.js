const input = document.getElementById("input-screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if (value === "C") {
            input.value = ""; // Clear input
        } 
        else if (value === "=") {
            try {
                input.value = eval(input.value); // Evaluate math expression
            } catch {
                input.value = "Error"; // Handle invalid input
            }
        } 
        else if (value === "⌫" ) {
            input.value = input.value.slice(0, -1);
        } 
        else {
            input.value += value; // Append clicked value
        }
    });
});
