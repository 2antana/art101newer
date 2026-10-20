// the clicker button program

let count=0; 

$("#needy-button").click( function(){
    //what to do when button is clciked
    count = count + 3;
    $("#needy-button").html("...a wonderful " + count + " years");
});
