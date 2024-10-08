var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 1;
btn.addEventListener("click",function(){
    if(flag == 1){
        // Turn ON the bulb
        bulb.style.backgroundColor = "yellow";
        console.log("Button ON");
        // Change button color to green when ON
        btn.style.backgroundColor = "Green"
        flag = 0;
    }else{
        // Turn OFF the bulb
        bulb.style.backgroundColor = "transparent";
        console.log("Button OFF");
        // Change button color to red when OFF
        btn.style.backgroundColor ="red"
        flag = 1;
    }
    
})