$(".class").addClass("shift") 
$("h1").addClass("shift")
$(".bulbs").addClass("middle")
$("button").addClass("btn-text")

let colors = ["blue","pink","purple","red","yellow"]
let bulbs = ["images/black.jpg","images/blue.jpg","images/pink.jpg","images/purple.jpg","images/red.jpg","images/yellow.jpg"]
let numOfBulbs = document.querySelectorAll(".bulb").length;

for (let i=0;i<numOfBulbs;i++){
    //btnColor();
    document.querySelectorAll(".bulb")[i].addEventListener("click",function(){
        document.querySelector("img").src=bulbs[i]//selecting the color in order as per iteration of i through each button
        setTimeout(function(){
            document.querySelector(".bulbs").src="images/off.jpg"            
        },1000)
       
    })
}
//function btnColor(){
$(".bl").css("color","black")
$(".b").css("color","blue")
$(".pk").css("color","pink")
$(".p").css("color","purple")
$(".r").css("color","red")
$(".y").css("color","yellow")
//}
