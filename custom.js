"use strict";

$(document).ready( function()
{
  var width = $("#RedBox").width();
  var height = $("#RedBox").height();

  var innerwidth = $("#RedBox").innerWidth();
  var innerheight = $("#RedBox").innerHeight();

  var outerwidth = $("#RedBox").outerWidth();
  var outerheight = $("#RedBox").outerHeight();

  var outerwidthWithMargin = $("#RedBox").outerWidth(true);
  var outerheightWithMargin = $("#RedBox").outerHeight(true);

  console.log("width: " + width);
  console.log("height: "+ height);

  console.log("Inner width: " + innerwidth);
  console.log("Inner height: "+ innerheight);

  console.log("Outer width: " + outerwidth);
  console.log("Outer height: "+ outerheight);

  console.log("Outer width with margin: " + outerwidthWithMargin);
  console.log("Outer height with margin: "+ outerheightWithMargin);

  $("#ClickMe").click(function(){
    $("#RedBox").width(400);
  });
});
