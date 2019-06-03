"use strict";

$(document).ready( function()
{
  $("#EpicButton").click(function()
  {
    $.get("favorite.php", function(data,status){
      console.log(data);

      $("div").html(data);
      console.log(status);
    });
  });


});
