const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");


function Text(){
   g.font = "54px Arial"; 
   g.fillStyle = "black";
   g.fillText("Merry Christmas",100,140);
}
Text();

function BoomGreen(xPos, yPos, width, height){
    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(xPos, yPos);
    g.lineTo(xPos + width / 2, yPos - height);
    g.lineTo(xPos + width, yPos);
    g.closePath();
    g.fill();
    g.stroke();
}

BoomGreen(150,500,260,105);
BoomGreen(158,455,240,90);
BoomGreen(165,406,210,75);
BoomGreen(172,361,190,65);
BoomGreen(180,318,170,49);
BoomGreen(190,287,150,39);
BoomGreen(196,260,130,37);
BoomGreen(208,235,110,43);

function Ball1(x, y, color, size){

    g.beginPath();
    g.arc(x, y, size, 0, 2 * Math.PI);
    g.closePath();
    g.fillStyle = color;
   
    g.fill();
    g.stroke();
}

Ball1(350,470, "yellow", 10);
Ball1(250,480, "red", 12);
Ball1(330,420, "blue", 10);
Ball1(300,440, "red", 9);
Ball1(310,380, "yellow", 10);
Ball1(250,390, "red", 12);
Ball1(230,370, "red", 8);
Ball1(270,430, "red", 9);
Ball1(210,440, "pink", 9);
Ball1(210,300, "yellow", 9);
Ball1(200,395, "yellow", 8);
Ball1(310,345, "pink", 9);
Ball1(245,350, "yellow", 8);
Ball1(280,320, "blue", 10);
Ball1(370,500, "pink", 9);
Ball1(190,489, "blue", 9);
Ball1(300,496, "yellow", 9);
Ball1(290,280, "pink", 9);
Ball1(240,270, "blue", 8);
Ball1(270,250, "purple", 9);
Ball1(240,240, "yellow", 8);
Ball1(220,335, "purple", 9);
Ball1(280,360, "purple", 8);
Ball1(260,300, "red", 8);
Ball1(270,210, "red", 8);