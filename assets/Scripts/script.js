const controls = document.querySelectorAll('.btn-input');
const screenContent = document.querySelector('.display-result');
const memory = document.querySelector('.display-input');
const actions = document.querySelectorAll('.btn-action');
const clear = document.querySelector('.btn-action-clear');
const backspace = document.querySelector('.btn-input-backspace');
const eqauls = document.querySelector('.btn-action-equal');

const state = {
    expression: "",   // full expression as a string (e.g. "5+3*2")
    lastResult: null  // store last result after equals
};

// Handle number, dot, and brackets input
controls.forEach(btn => {
    btn.addEventListener('click', function () {
        const value = btn.textContent.trim();

        // Prevent multiple dots in the same number
        if (value === "." && screenContent.value.includes(".")) return;

        // Append value to display + expression
        screenContent.value += value;
        state.expression += value;
        // memory.value = state.expression;
    });
});

// Clear
clear.addEventListener('click', function () {
    screenContent.value = "";
    memory.value = "";
    state.expression = "";
    state.lastResult = null;
});

// Backspace
backspace.addEventListener('click', function () {
    screenContent.value = screenContent.value.slice(0, -1);
    state.expression = state.expression.slice(0, -1);
    memory.value = state.expression;
});

// Handle operators
actions.forEach(btnAction => {
    btnAction.addEventListener('click', function () {
        let operator = "";

        if (btnAction.classList.contains('divide')) operator = "/";
        if (btnAction.classList.contains('multiply')) operator = "*";
        if (btnAction.classList.contains('plus')) operator = "+";
        if (btnAction.classList.contains('minus')) operator = "-";
        if (btnAction.classList.contains('bracket-open')) operator = "(";
        if (btnAction.classList.contains('bracket-close')) operator = ")";

        if (operator) {
            state.expression += operator;
            screenContent.value = "";
            memory.value = state.expression;
        }

        // Percentage (applies immediately)
        if (btnAction.classList.contains('percentage')) {
            let num = Number(screenContent.value);
            if (!isNaN(num)) {
                screenContent.value = num / 100;
                state.expression = screenContent.value;
                memory.value = num + " %";
            }
        }
    });
});

// Equals
eqauls.addEventListener('click', function () {
    try {
        let result = eval(state.expression); // Evaluate controlled input
        if (!isFinite(result)) {
            screenContent.value = "Error";
            state.expression = "";
        } else {
            screenContent.value = result;
            memory.value = state.expression + " =";
            state.lastResult = result;
            state.expression = result.toString(); // Continue with result
        }
    } catch {
        screenContent.value = "Error";
        state.expression = "";
    }
});
