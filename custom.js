"use strict";

$(document).ready( function()
{
  $("input").keydown(function(event){
    console.log(event.which + "Key pressed");
  });

  $("input").keypress(function(event){
    console.log(event.which + "single press");
  });
});
