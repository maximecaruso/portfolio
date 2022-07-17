var ctx;
var img;
var img2;
var plane1;
var plane2;
var plane3;
var plane4;
var plane5;
var plane6;
var plane7;
var c;
$(document).ready(function(){
 img = document.getElementById("plane");
 img2 = document.getElementById("planer");
 hover = document.getElementById("planeHover");
 hover2 = document.getElementById("planeHover2");
 plane1 = new PaperPlaneR(img,img,0,hover,"HausDerEmotionen.html");
 plane2 = new PaperPlaneR(img,img,1,hover,"WasserSimulation.html");
 plane3 = new PaperPlaneL(img2,img2,2,hover2, "VisualisierungGengenbach.html");
 plane4 = new PaperPlaneL(img2,img2,3,hover2, "VisualisierungAstridLindgrenSchule.html");
 plane5 = new PaperPlaneL(img2,img2,4,hover2, "TigerEntenClub.html");
 plane6 = new PaperPlaneL(img2,img2,5,hover2,"VisualisierungAusstellungsgebäude.html");
 plane7 = new PaperPlaneR(img,img,6,hover, "RoboTopie.html");
c = document.getElementById("canvas");
 ctx = c.getContext("2d");


console.log(img);

c.addEventListener('mousemove', paperInteraction);
c.addEventListener('click', paperInteraction2);
update();


});

function update(){
   
    ctx.clearRect(0,0,4000,4000);
  plane1.update();
 plane2.update();
  plane3.update();
  plane4.update();
  plane5.update();
  plane6.update();
  plane7.update();
    setTimeout(update,20);
}



class PaperPlaneR {
     xP= 1610+Math.round(Math.random()*200);
     yP= 300+Math.round(Math.random()*600);
     speed=3+Math.round(Math.random()*6);
     degrees =5+Math.round(Math.random()*10);
    img;
    img2;
    hover;
    eS;
    titel
    constructor(imge,imge2,es, hover,titel) {
      this.img = imge;
      this.img2 = imge2;
      this.hover = hover;
      this.eS = es;
      this.titel = titel
    }
    changeHover(){
      this.img = this.hover;
    }
    changeBack(){
      this.img = this.img2;
    }
    update(){
        this.xP-=this.speed;
        this.yP+= 0.4;

        ctx.drawImage(this.img,this.xP,this.yP,300+30*this.eS,150+15*this.eS);
    
  
        if(this.xP < -200){
            this.xP = 1610+Math.round(Math.random()*200);
            this.yP = 300+Math.round(Math.random()*600);
        }
        
    }
  }

  function paperInteraction(e){
    var cRect = c.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  

   if(canvasX > plane1.xP && canvasX < plane1.xP+300 && canvasY > plane1.yP && canvasY < plane1.yP+150){
     plane1.changeHover();
   }
   else{
    plane1.changeBack();
   }
   if(canvasX > plane2.xP && canvasX < plane2.xP+300 && canvasY > plane2.yP && canvasY < plane2.yP+150){
    plane2.changeHover();
  }
  else{
   plane2.changeBack();
  }
  if(canvasX > plane3.xP && canvasX < plane3.xP+300 && canvasY > plane3.yP && canvasY < plane3.yP+150){
    plane3.changeHover();
  }
  else{
   plane3.changeBack();
  }

  if(canvasX > plane4.xP && canvasX < plane4.xP+300 && canvasY > plane4.yP && canvasY < plane4.yP+150){
    plane4.changeHover();
  }
  else{
   plane4.changeBack();
  }

  if(canvasX > plane5.xP && canvasX < plane5.xP+300 && canvasY > plane5.yP && canvasY < plane5.yP+150){
    plane5.changeHover();
  }
  else{
   plane5.changeBack();
  }

  if(canvasX > plane6.xP && canvasX < plane6.xP+300 && canvasY > plane6.yP && canvasY < plane6.yP+150){
    plane6.changeHover();
  }
  else{
   plane6.changeBack();
  }

  if(canvasX > plane7.xP && canvasX < plane7.xP+300 && canvasY > plane7.yP && canvasY < plane7.yP+150){
    plane7.changeHover();
  }
  else{
   plane7.changeBack();
  }


  }

  function paperInteraction2(e){
    var cRect = c.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make  

   if(canvasX > plane1.xP && canvasX < plane1.xP+300 && canvasY > plane1.yP && canvasY < plane1.yP+150){
     click(plane1);
   }
   
   if(canvasX > plane2.xP && canvasX < plane2.xP+300 && canvasY > plane2.yP && canvasY < plane2.yP+150){
    click(plane2);
  }

  if(canvasX > plane3.xP && canvasX < plane3.xP+300 && canvasY > plane3.yP && canvasY < plane3.yP+150){
    click(plane3);
  }

  if(canvasX > plane4.xP && canvasX < plane4.xP+300 && canvasY > plane4.yP && canvasY < plane4.yP+150){
    click(plane4);
  }
  

  if(canvasX > plane5.xP && canvasX < plane5.xP+300 && canvasY > plane5.yP && canvasY < plane5.yP+150){
    click(plane5);
  }
  

  if(canvasX > plane6.xP && canvasX < plane6.xP+300 && canvasY > plane6.yP && canvasY < plane6.yP+150){
    click(plane6);
  }
  

  if(canvasX > plane7.xP && canvasX < plane7.xP+300 && canvasY > plane7.yP && canvasY < plane7.yP+150){
    click(plane7);
  }
 

  }
function click(plane){
  window.location = plane.titel;
  //document.getElementById("inhaltProjekt").innerHTML = plane.titel;
}
  class PaperPlaneL {
    xP= -500-Math.round(Math.random()*200);
    yP= 300+Math.round(Math.random()*600);
    speed=3+Math.round(Math.random()*6);
    degrees =5+Math.round(Math.random()*10);
   img;
   eS;
   img2;
   hover;
   titel;
   constructor(imge,imge2,es, hover,titel) {
    this.img = imge;
    this.img2 = imge2;
    this.hover = hover;
    this.eS = es;
    this.titel = titel;
  }
  changeHover(){
    this.img = this.hover;
  }
  changeBack(){
    this.img = this.img2;
  }
   update(){
       this.xP+=this.speed;
       this.yP+= this.speed/4;
 
       ctx.drawImage(this.img,this.xP,this.yP,300+30*this.eS,150+15*this.eS);
      
       

       if(this.xP > 1610){
           this.xP = -500-Math.round(Math.random()*200);
           this.yP = 300+Math.round(Math.random()*600);
       }
       
   }
 }