"use strict";

$(document).ready( function()
{
  $("div").mouseenter(function(){
    console.log("Enter mouse");
    $(this).css("color", "red");
  });

  $("div").mouseleave(function(){
    console.log("Exited div");
    $(this).css("color", "black");
  });

  $("span").mouseenter(function(){
    console.log("Enter span");
  });
});
