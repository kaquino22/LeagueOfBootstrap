$(document).ready(function() {

    $("#ComAudio").click(function() {
        $("#ComAudio").hide();
        $("#SemAudio").show();
        playAudio();
    });

    $("#SemAudio").click(function() {
        $("#SemAudio").hide();
        $("#ComAudio").show();
        pauseAudio();
    });


    var x = document.getElementById("musicaLux");

    function playAudio() {
        x.play();
    }

    function pauseAudio() {
        x.pause();
    }
});