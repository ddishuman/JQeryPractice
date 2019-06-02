"use strict";

$(document).ready( function()
{
  $("#Red").click(function()
  {
    console.log("Red clicked");
  });

  $("#Yellow").click(function(event)
  {
    console.log("Yellow clicked");

    event.stopPropagation();
  });
  /*$("p").bind("click", function(event)
  {
    console.log(event);
    console.log(event.pageX + " : " + event.pageY);
  });*/
/*  function AfterBind(event)
  {
    console.log("After Bind Function");
  }

  $("p").bind("click", function(event)
  {
    console.log("Before Bind");
  });

  $("#BindButton").click(function()
  {
    $("p").unbind("click");

    $("p").bind("click", function(event)
    {
      AfterBind(event));
    });

  }); */



  /*var titleVar = $("div").attr("title");
  console.log(titleVar);*/

  /*$("p").click(function() {
    var result = $("p").hasClass("epicClass");

    console.log(result);
  });

  $("#RemoveClass").click(function() {
    $("p").removeClass();
  });

  $("#ToggleClass").click(function() {
    $("p").toggleClass("epicClass");
  });

  $("#AddClass").click(function() {
    $("p").addClass("epicClass");
  });*/

  /*$("#EpicButton" ).click(function()
  {
    console.log($("div").html());
    $("div").html("<b>You are a bold one.</b>");

    $("div").data("name", "BATMAN");
    console.log($("div").text());

    $("div").text("Awesome stuff");
  });*/

  /*$("#EpicButton").click(function()
  {
    $("div").attr(
      {
        "title": "Goku",
        "epicAttr" : "Even better attribute"
      });

    $("div").attr("title", function(i, originalValue)
    {
      return i+100;
    });
  });*/

    /*$("tr:odd").css("background-color", "red");*/

});
