const controls = document.querySelectorAll('.btn-input');
const screenContent = document.querySelector('.screen input');
const actions = document.querySelectorAll('.btn-action');
const clear = document.querySelector('.btn-action-clear');
const backspace = document.querySelector('.btn-input-backspace');
console.log(actions);

const storage = {

    NumberPressed: false,
    OperatorPressed: false,
    InMemory: "",
};

for (let i = 0; i < controls.length; i++) {
    const btn = controls[i];

    btn.addEventListener('click', function () {
        screenContent.value = screenContent.value + btn.textContent;
        storage.NumberPressed = true;
        storage.InMemory += btn.textContent;
    });


}

clear.addEventListener('click', function (event) {
    screenContent.value = "";
});

backspace.addEventListener('click', function (event) {
    const Content = screenContent.value;
    const NewScreenContent = Content.slice(0, -1);
    screenContent.value = NewScreenContent;
});



for (let i = 0; i < actions.length; i++) {
    const btnAction = actions[i];

    btnAction.addEventListener('click', function (event) {

        if (btnAction.classList.contains('bracket')) {
            const Content = Number(screenContent.value);
            screenContent.value = "(" + Content + ")";

        }

        else if (btnAction.classList.contains('percentage')) {
            const Content = Number(screenContent.value) / 100;
            screenContent.value = Content;
        }

        else if (btnAction.classList.contains('plus')) {
            const Content = Number(screenContent.value);
            screenContent.append['+'];
        }
    });


}