$(document).ready(function() {
  $(".btn").submit(function(event){
    event.preventDefault();
    $('#questions').hide();
    $('.result').show();

    var q1=$("input.q1").val();
    var q2=$("input.q2").val();
    var q3=$("input.q3").val();
    var q4=$("input.q4").val();

    $("#q1").text(q1);
    $("#q2").text(q2);
    $("#q3").text(q3);
    $("#q4").text(q4);

    console.log();
  });
});
