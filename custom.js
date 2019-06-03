"use strict";

$(document).ready( function()
{
  $.fn.extend({
    check: function()
    {
      return this.each(function(){
        this.checked = true;
        console.log("Check");
      });
    },
    uncheck: function()
    {
      return this.each(function(){
        this.checked = false;
        console.log("UnCheck");
      });
    }
  });

    $("#CheckButton").click(function(){
      $("input[type='checkbox']").check();
    });

    $("#UnCheckButton").click(function(){
      $("input[type='checkbox']").uncheck();
    });

});
