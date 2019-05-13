$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
    $("#blueBox").css("left",$("#blueBox").offset().left-10);
    //moves right
    } else if (event.which === 39) {
    $("#blueBox").css("left",$("#blueBox").offset().left+10);
       
    } else if (event.key === "ArrowUp"){
    $("#blueBox").css("top",$("#blueBox").offset().top-10);    
    } else if (event.key === "ArrowDown"){
    $("#blueBox").css("top",$("#blueBox").offset().top+10);    
       } else if (event.which === 65 ) {
    $("#redBox").css("left",$("#redBox").offset().left-10);
    //moves right
    } else if (event.which === 68) {
    $("#redBox").css("left",$("#redBox").offset().left+10);
       
    } else if (event.key === "w"){
    $("#redBox").css("top",$("#redBox").offset().top-10);    
    } else if (event.key === "s"){
    $("#redBox").css("top",$("#redBox").offset().top+10);    
    } else {
        return;
    }
    
});
