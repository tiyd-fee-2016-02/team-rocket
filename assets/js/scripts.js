$(document).ready(function(){
  'use strict';
  $( ".contributions" ).click(function() {
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".contributions-block").show();
    $(".public-block").hide();
    $( ".repo-block" ).hide();
  });
  $(".repos").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $( ".repo-block" ).show();
    $( ".contributions-block" ).hide();
    $(".public-block").hide();
  });
  $(".public").click(function(){
    $(".tab").removeClass("clicked");
    $( this ).addClass( "clicked" );
    $(".public-block").show();
    $( ".contributions-block" ).hide();
    $( ".repo-block" ).hide();
  });


   $.getJSON( "https://api.github.com/users/bestmattever", function( json ) {
      $(".my-name").html(json.name);
      $(".user-name").html(json.login);
      $(".organization").html(json.company);
      $(".location").html( json.location );
      $(".email").html(json.email);
      $(".link").html(json.html_url);
      $(".joined").html(json.created_at);
      $(".follows").html(json.followers);
      $(".starrrrred").html(json.starred_url);
      $(".followingg").html(json.following);
   });
  // console.log()

  // , function(data){
  //
  // })
});

  // $( ".contributions-block" ).hide();
  // $( ".repo-block" ).hide();
  // $(".public-block").hide();
