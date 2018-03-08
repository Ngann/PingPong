$(document).ready(function() {
  $('.questions form').submit(function(event){
    event.preventDefault();
//  debugger;
    $('.questions').hide();


    var q1=$("input.q1").val();
    var q2=$("input.q2").val();
    var q3=$("input.q3").val();
    var q4=$("input.q4").val();
    var all = [q1,q2,q3,q4];

    $("span#array").text[all];
    $(".showArray").show[all];

    newArray = ["1","2","3"]
    all.concat(newArray);

//    $('span#array').show(string);
//    $('span#array').text(all);
//    var array = (Q1,Q2,Q3,Q4);
//    var Q1 = $("span#q1").text(q1);
//    var Q2 = $("span#q2").text(q2);
//    var Q3 = $("span#q3").text(q3);
//    var Q4 = $("span#q4").text(q4);

//    $("span#q1").text(q1);
//    $("span#q2").text(q2);
//    $("span#q3").text(q3);
//    $("span#q4").text(q4);

    console.log(all);

  });
});

//pending
//Then, use push() to add only these elements to a brand new array.
//Finally, display this new array in your page's HTML as list items in a <ul> tag.
