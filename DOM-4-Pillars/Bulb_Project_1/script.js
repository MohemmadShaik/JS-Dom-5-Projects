var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var h11 = document.querySelector("h1");
var flag = 1;
btn.addEventListener("click", function(){
    if(flag == 1){
        bulb.style.backgroundColor = "yellow";
        bulb.style.borderColor = "green";
        btn.style.backgroundColor ="green";
        h11.style.backgroundColor = "green";
        h11.style.color = "yellow";
        btn.textContent= "ON"
        console.log("Button ON");
        flag = 0;
    }else{
        bulb.style.backgroundColor = "transparent";
        bulb.style.borderColor = "red";
        btn.style.backgroundColor ="red";
        h11.style.backgroundColor = "red";
        h11.style.color = "white";
        btn.textContent= "OFF"
        console.log("Button OFF");
        flag = 1;
    }
})
