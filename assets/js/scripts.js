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


   $.getJSON( "https://api.github.com/users/octocat", function( json ) {
     var time = new Date(json.created_at).toLocaleDateString();

      $(".usr-img").append('<img src="'+json.avatar_url+'" alt="avatar"></img>')
      $(".my-name").html(json.name);
      $(".user-name").html(json.login);
      $(".organization").html(json.company);
      $(".location").html( json.location );
      $(".email").html(json.email);
      $(".link").html(json.html_url);
      $(".joined").html(time);
      $(".follows").html(json.followers);
      // $(".starrrrred").html(json.starred_url);
      $(".followingg").html(json.following);
   });

   $.getJSON("https://api.github.com/users/octocat/repos", function(json){

   })

});
