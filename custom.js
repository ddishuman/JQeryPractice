"use strict";

$(document).ready( function()
{
  var obj1 =
  {
    apple:0,
    banana: {weight:52, price:100},
    cherry: 97
  }

  var obj2 =
  {
    banana: {price: 200},
    taste: 100
  }

  console.log(obj1);
  console.log(obj2);

  $.extend(obj1, obj2);

  console.log(obj1);
  console.log(obj2);
});
