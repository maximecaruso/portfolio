/*$(document).ready(function(){
    var x = 30;
    var y = 35;
    var t = 5;
    console.log(x);
   $(document).scroll(function(){
      x+=2;
      y--;
      t-=2;
      console.log(x);
        $('#logoVideo').css({"width":""+x+"%","margin-left":""+y+"%","margin-top":""+t+"vh"});
   });
});
*/  var x = 30;
var y = 35;
var t = 10;
var o2 = 0;
var o = 1;
var s = 4;
var b = 0;
var b2 = 60;
var logl = true;
var leftscfroll = false;
var leftsc = 0;

var jj = false;
$(window).on('wheel', function(event){


    if(event.originalEvent.deltaY !== 0){
  
      if(event.originalEvent.deltaY < 0){
   
          x-=2*s;
        y+=1*s;
        t+=1*s;   
        o+=0.01*s;
        o2-=0.01*s;
        b-=1*s;
        b2+=1*s;
        

        console.log(mcZ);
      
          mcZ--;  
         
          if(leftscfroll == true){
            leftsc-=2;
          }
      
      }
      else {
   
        x+=2*s;
        y-=1*s;
        t-=1*s; 
        o-=0.01*s;
        o2+=0.01*s; 
        b+=1*s; 
        b2-=1*s;  
        

        if( an == true){
          console.log(mcZ);
        mcZ++;
        }
        if(leftscfroll == true){
          leftsc+=2;
        }
      }
      if(x < 30){
          x=30;
          y=35;
          t=10;
          o=1;
          o2=0;
          b=0;
          b2=60;
      }
      if(x > 250 && x<260){
        o2=1;
     
        $('#logoVideo').css({"display":"none"});
           $('html').css({"overflow-y":"visible"});
           
            
    }
    else if(x<=250){
        $('#logoVideo').css({"display":"block"});
        $('html').css({"overflow-y":"hidden"});
    }
      $('#logoVideo').css({"width":""+(x)+"%","margin-left":""+(y)+"%","margin-top":""+t+"vw","opacity":""+(o)+"","filter":"blur("+b+"px)"});
      $('#haupt').css({"opacity":""+o2,"filter":"blur("+b2+"px)"});

    }
if(leftsc<0){
  leftsc=0;
}
if(leftsc>100){
  leftsc=100;
}
    if(mcZ<0){
      mcZ = 0;
    }
   else if(mcZ>70){
      mcZ = 70;
    }
      if(mcZ == 0){
        
        $("#mc").html("MAXIME CARUSO").css({"margin-left":"2vw"});
        $("#mcU").css({"margin-left":"2vw"});
        $('html').css({"overflow-y":"visible"});

      }
      else if(mcZ == 10){
       $("#mc").html("MAXIE CARUO").css({"margin-left":"9vw"});
       $("#mcU").css({"margin-left":"9vw"});
       $('html').css({"overflow-y":"hidden"});
      }
      else if(mcZ == 20){
        $("#mc").html("MAXE CARO").css({"margin-left":"12vw"});
        $("#mcU").css({"margin-left":"12vw"});
       }
       else if(mcZ == 30){
        $("#mc").html("MAE CAO").css({"margin-left":"18vw"});
        $("#mcU").css({"margin-left":"18vw"});
       }
       else if(mcZ == 40){
        $("#mc").html("ME CO").css({"margin-left":"23vw"});
        $("#mcU").css({"margin-left":"23vw"});
       }
       else if(mcZ == 50){
        $("#mc").html("M C").css({"margin-left":"28vw"});
        $("#mcU").css({"margin-left":"28vw"});
      
       }
      
       else if(mcZ == 60){
        $("#mc").html("MC").css({"margin-left":"30%"});
        
           
     
        $("#mcU").css({"margin-left":"30vw"});
        leftsc=0;
        leftscfroll=false;
      
       }
       else if(mcZ == 70){
        leftscfroll = true;
       
       }
     

       
       $("#start").css({"left":""+0-leftsc+"%"});
       $("#next").css({"left":""+100-leftsc+"%"});
      
      if((window.pageXOffset+(window.innerWidth/2.5))>$("#profil").offset().left && jj==false){
        $('html').css({"overflow-y":"visible"});
   
        leftscfroll = false;
      }
       
  });
let an = false;
let mcZ = 0;
  $(document).scroll(function(){

if(window.innerWidth>600){
        if((window.pageYOffset+(window.innerHeight/2.6))>$("#mc").offset().top){
            an=true;
      }
      
      else{
        an = false;
      }
   
      for(let i = 1;i<8; i++){
        if((window.pageYOffset+(window.innerHeight/1.5))>$("#kategorie"+i).offset().top && i!= 4 && i!= 5){
          $("#kategorie"+i).css({"opacity":"1","height":"3em"});
          
          
    }
    else if((window.pageYOffset+(window.innerHeight/1.5))>$("#kategorie"+i).offset().top && i== 4){
      $("#kategorie"+i).css({"opacity":"1","height":"1.5em"});
    }
    else if((window.pageYOffset+(window.innerHeight/1.5))>$("#kategorie"+i).offset().top && i== 5){
      $("#kategorie"+i).css({"opacity":"1","height":"1.5em"});
    }
    else{
      $("#kategorie"+i).css({"opacity":"0","height":"0em"});
    }
      }
  
  
 
}
    

        });



  $(document).ready(function(){window.scrollTo(0, 0);});
  /*
  let z = 1;
  function update(){
    
      if(z%2 == 0){
        fXpos = -20;
        fYpos = Math.round(Math.random()*5+(0)*4);
        r=Math.round(Math.random()*10);
        $("#flieger0").css({"transition":" margin "+(Math.round(Math.random()*4)+4)+"s","transform":"scaleX(1) rotate("+r+"deg)"}).css({"margin-left":""+fXpos+"%","margin-top":""+fYpos+"vw"});
    
      }
      else{
        
 
    fXpos = 110;
        fYpos = Math.round(Math.random()*5+(0)*4);
        r=Math.round(Math.random()*10);
       
        $("#flieger0").css({"transition":" margin "+(Math.round(Math.random()*4)+4)+"s","transform":"scaleX(-1) rotate("+r+"deg)"}).css({"margin-left":""+(fXpos)+"%","margin-top":""+fYpos+"vw"});       
    
  
      }
  z++;
    setTimeout(update, 8000);
  }
*/
 




