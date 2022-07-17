setTimeout(fr,1200);
$(document).ready(function(){
    $("html").css({"overflow-y":"hidden"});
    $("#2").css({"height":"100vh"});
    $("#3").delay(500).animate({"height":"100vh","top":"0vh"});
    $("main").delay(1200).animate({"opacity":"1"},1000);
console.log("d");
 
    });

    function fr(){
        $("html").css({"overflow-y":"visible"});
    }