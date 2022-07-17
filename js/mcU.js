let i=0;
inhalt = ["| entdecken |"," | erschaffen |", "| erzählen |", "| erleben |"];
$(document).ready(function(){

   mcUupdate();
   });
   
   function mcUupdate(){
 
      
    $("#mcU").html(""+inhalt[i]);
    $("#mcU").fadeIn(400);
    i++;
    if(i>3){
        i=0;
    }
    $("#mcU").delay(1100).fadeOut(400);

       setTimeout(mcUupdate,2000);

   }