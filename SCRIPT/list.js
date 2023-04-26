let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// button.addEventListener("click", function(){
//     if(input.value.length > 0){
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//     }
// })

// input.addEventListener("keypress", function(event){
//     if(input.value.length > 0 && event.keyCode == 13){
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//     }
// })

function inputCondition(){
    return(input.value.length)
}

function liCondition(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function buttonClick(){
    if(inputCondition() > 0){
        liCondition()
    }
}

// event.which === 13
function inputKeypress(){
    if(inputCondition() > 0 && event.keyCode === 13){
        liCondition()
    }
}


button.addEventListener("click", buttonClick);
input.addEventListener("keypress", inputKeypress);