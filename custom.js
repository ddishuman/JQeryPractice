"use strict";

$(document).ready( function()
{
  console.log($.isNumeric(6));
  console.log($.isNumeric("Hello"));
  console.log($.isNumeric(-566));
  console.log($.isNumeric("-566"));

});
