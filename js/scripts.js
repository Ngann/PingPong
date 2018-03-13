$(document).ready(function(){
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    var result = [];
    if (number % 15 === 0){
      result = "pingpong"
    } else if (number % 5 === 0){
      result = 'ping'
    } else if (number % 3 === 0) {
      result = 'pong'
    } else {
      result = (number)
    }
    $("ul#showResult").append(`<li>${result}</li>`);
    // $("ul#showResult").append(`<li>${number}${result}</li>`);
  //  var add = input.push(number)



    // var number = parseInt($("input#number").val());
    // var result = [];
    //
    // if (number % 5 === 0) {
    //   result = 'ping'
    // } else if (number % 3 === 0) {
    //   result = 'pong'
    // } else if (number % 15 === 0) {
    //   result = 'pingpong'
    // } else {
    //   result = 'nothing'
    // }
    //
    // $("ul#showResult").text(result);
    console.log();
  });
});
