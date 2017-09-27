let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!answer && !attempt){
        setHiddenFields();
    }
    
    
}

//implement new functions here
let setHiddenFields = function (){
    attempt = 0;
    answer = Math.floor(Math.random() * (9999 - 0 +1)) + 0;
    answer = answer.toString();
    while(answer.length <= 3){
        answer = "0" + answer;
    }
    return answer;
    
    
}