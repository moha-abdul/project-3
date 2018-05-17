var pingPong = function(input) {
  var myArray = [];
  for(var newNumbers = 1;newNumbers <= input; newNumbers++){
     if (newNumbers % 3 === 0 && newNumbers % 5 === 0){
      myArray.push("ping-pong");
    }else	if(newNumbers % 3 === 0){
      myArray.push("ping");
    } else if (newNumbers % 5 === 0){
      myArray.push("pong");
    } else {
      myArray.push(newNumbers);
    }
  }
    return myArray;
};

//User Interface Logic
$(document).ready(function(){
	$("#form").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var input = parseInt($("input#numberValue").val());
  	var output = pingPong(input);

    output.forEach(function(value) {
    $("#output").append("<li>" + value + "</li>");
    });
  });
});
