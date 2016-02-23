$(document).ready(function(){
  'use strict';
  $( ".contributions" ).click(function() {
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".contributions-block").show();
  });
  $(".repos").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".contributions-block").show();
  });
  $(".public").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".contributions-block").show();
  });


});

  $( ".contributions-block" ).hide();
  $( ".repo-block" ).hide();
