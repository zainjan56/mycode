let buttons = document.getElementById("buttons");

// Select all buttons
let all = buttons.querySelectorAll("button");
let result = document.getElementById("result");

for(let i=0; i<all.length; i++){
    all[i].addEventListener('click', function(){
        if(this.innerHTML=="="){
           result.innerHTML = eval(result.innerHTML);
        }
        else if(this.innerHTML=="C")
        {
            result.innerHTML = "";
        }
        else{
        result.innerHTML += this.innerHTML;
        }
    });
}