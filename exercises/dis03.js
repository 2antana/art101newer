let treats = 0;

// when the "give" button is clicked, add 1 treat and update the header
$("#give-button").click( function() {
    treats = treats + 1;
    $("#treat-count").html("Kaya has " + treats + " treats!");
});

$("#take-button").click( function() {
    treats = treats - 1;
    $("#treat-count").html("Kaya has " + treats + " treats!");
});
// TODO 6: DONE
// follow the same format as the give button above, but subtract 1 instead.
// (hint: copy the 4 lines above, then change 2 things)



