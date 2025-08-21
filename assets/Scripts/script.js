const controls = document.querySelectorAll('.btn-input');
const screenContent = document.querySelector('.screen input');
//const actions = document.querySelectorAll('.btn-action');
//const clear = document.querySelector('.btn-action-clear');
//const backspace = document.querySelector('.btn-input-backspace');

for(let index = 0; index < controls.length; index = index + 1){
    const btn = controls[index];

    btn.addEventListener('click', function(){ 

     //console.log(btn.textContent);
     screenContent.value = screenContent.value + btn.textContent.trim;
    } );
}

