//generate a random number
var y= Math.floor(Math.random()*100+1);

//count the number everytime till we get exact number
var guess =1;

document.getElementById("submitguess").onclick=function(){
    

    //user to enter a number
 var x=   document.getElementById("guessField").value;

 if(x==y)
 {
     alert("Congratulation!!! You have got the number in ")
 }
 else if (x>y)
 {
     guess++;
     alert("Sorry!!! Try a smaller number.");
 }
 else
 {
     guess++;
  alert("Sorry!!! Try a larger number.");
 }
}