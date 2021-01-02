let inputView = document.getElementById('text');
let allBtns = document.querySelectorAll('.give');
let clearAll = document.getElementById('clear-all');
let removeAll = document.getElementById('remove-all');
let deleteBtn = document.getElementById('delete');
let eual = document.getElementById('qual');
let divided = document.getElementById('divided');
let multiPlied = document.getElementById('multiplied');
let percent = document.getElementById('percent');

allBtns.forEach(element => {
    
    element.addEventListener('click', function() {
        
        inputView.value += element.innerHTML;
        
    });
});


// eual

eual.addEventListener('click',() => {
    
    calculate();
    
});

function calculate () {
    
    inputView.value = eval(inputView.value = inputView.value);
    
    if(inputView.value == 'undefined') {
        
       alert('The Input Value Is Empty');
        
        inputView.value = '';
    } else {
        
        console.log('other');
    }
}

multiPlied.addEventListener('click', () => {
    
    inputView.value += '*';
    
});


divided.addEventListener('click', () => {
    
    inputView.value += '/';
    
});

percent.addEventListener('click', () => {
    
    inputView.value += '%';
    
});

// To Delete The Input Value 

deleteBtn.addEventListener('click', () => {
    
    inputView.value = inputView.value.substring(0, inputView.value.length -1);
   
});

// To Delete The All Input in Value 

clearAll.addEventListener('click', () => {
    
    inputView.value = '';
    
});

removeAll.addEventListener('click', () => {
    
    inputView.value = '';
});

/*
document.addEventListener('keyup', () => {
    
    
    alert('You Cant Write Any Letter In Clacultor');
    
    inputText.value = '';
});

*/

inputView.addEventListener('focus', () => {
    
    inputView.blur();
});

