// dice value
//for first dice

var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice"+ randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

//for second dice

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// heading

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "🚩 Player1 wins!";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML = " Player2 wins!🚩";
}
else if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}

// if (randomnumber1===1){
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }
// else if (randomnumber1===2){
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }
// else if (randomnumber1===3){
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }
// else if (randomnumber1===4){
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }
// else if (randomnumber1===5){
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
//
// var randomnumber2 = Math.floor(Math.random()*6)+1;
//
// if (randomnumber2===1){
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// }
// else if (randomnumber2===2){
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// }
// else if (randomnumber2===3){
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// }
// else if (randomnumber2===4){
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// }
// else if (randomnumber2===5){
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// }
//
