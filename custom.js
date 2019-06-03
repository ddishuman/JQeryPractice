"use strict";

$(document).ready( function()
{
  $("div").click(function(){
    console.log("Clicked div");
  });

  $("div").mousedown(function(){
    console.log("Mouse down");
  });

  $("div").mouseup(function(){
    console.log("Mouse up");
  });
});
