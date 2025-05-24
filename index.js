
let equal = document.getElementById("equals");
let input = document.getElementById("input");
let clear = document.getElementById("clear");






function updateDisplay(val){

    if(val == '+' || val == '-' || val == '*' || val == '/'){
        try{
            calculate();
            input.value += val;
        }
        catch{
            input.value = "Error";
        }
    }
    else{
    input.value += val;
    }
}

function calculate(){
    let  answer;
    try{
        answer = eval(input.value);
        input.value = answer;
    }
    catch{
        input.value = "Error";
    }

}

function clearAll(){
    input.value = "";
    
}