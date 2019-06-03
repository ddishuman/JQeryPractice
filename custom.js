"use strict";

$(document).ready( function()
{
  $("#AnimateButton").click(function()
  {
    $("#DarthVader").animate({
      left: '500px',
      //opacity: '0.5'
      padding: '10px',
      height: '+=100px'
    });
  });



});
