"use strict";

$(document).ready( function()
{
  $("div").mouseenter(function(){
    console.log("Enter mouse");
  });

  $("span").mouseenter(function(){
    console.log("Enter span");
  });
});
