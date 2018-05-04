/*this function takes a number as an input*/

var pingPong = function(myNumber) {
  var myArray = [];
  for (var newNumbers = 1; newNumbers <= myNumber; newNumbers += 1) {
    if (newNumbers % 3 == 0 && newNumbers % 5 != 0) {
        myArray.push("ping");
    } else if (newNumbers % 5 == 0 && newNumbers % 3 == 0) {
        myArray.push("pingpong");
    } else if (newNumbers % 5 == 0 && newNumbers % 3 != 0) {
        myArray.push("pong");
    } else {
      myArray.push(newNumbers);
    }
  }
  return myArray.toString();
}

$(document).ready(function(){
  /*when you click on element button, class=btn, id=ping the submit function is initiated*/
  $("form#enterPing").submit(function(event) {
    event.preventDefault();
    /*myNumber takes in input*/
    var myNumber = parseInt($("input#myNumber").val());
    /*result is the output of the function pingPong*/
    var result = pingPong(myNumber);
    // this line outputs to html
    $("#result").text(result);
  });
});
