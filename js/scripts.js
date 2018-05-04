/*this function takes vowel as an input*/

var pingPong = function(ping) {
  return false;
}

$(document).ready(function(){
  /*when you click on element button, class btn, id ping the submit function is initiated*/
  $("form#enterPing").submit(function(event) {
    event.preventDefault();
    /*ping takes in input*/
    var ping = parseInt($("input#ping").val());
    /*result is the output of the function pingPong*/
    var result = pingPong(ping);
    // this line outputs to html
    $("#result").text(result);
  });
});
