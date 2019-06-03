"use strict";

$(document).ready( function()
{
  $("#EpicButton").click(function()
  {
    $("#AjaxDiv").load("textfile.txt")
  });


});
