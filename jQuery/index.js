
$("h1").addClass("big-title")

$("h1").click(function() {
    $("h1").css("color","purple");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});