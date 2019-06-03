"use strict";

$(document).ready( function()
{
  $("div").click(function(){
    console.log("Clicked div");
  });
  $("div").mousedown(function(){
    console.log("Mouse down");
  });
});
