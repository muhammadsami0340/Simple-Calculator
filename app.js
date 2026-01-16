var resultDiv = document.getElementById('result');

function calculator(){
    var userInput = document.getElementById('input').innerText;
    resultDiv.innerText = eval(userInput);
}

var screenDiv = document.getElementById('input')

function editScreen(data){
    if (data == 'C') {
        screenDiv.innerText = '';
        resultDiv.innerText = '0';
        return;
    }

    if(data == 'del'){
        var textLength = screenDiv.innerText.length;
        screenDiv.innerText = screenDiv.innerText.slice(0, textLength -1);
        return
    }
    screenDiv.innerText += data
}