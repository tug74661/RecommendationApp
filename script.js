let selection = document.getElementsByClassName("startButton");

let main = document.getElementById("MAIN");
main.style.display = "none";


for(let i = 0; i < selection.length; i++){
    selection[i].addEventListener("click",function(){
        document.getElementById("MAIN").style.display = "block";
        document.getElementById("START").style.display = "none";
    });
    
}