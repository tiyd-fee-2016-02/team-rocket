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
      //
      // var img = _.template('<img src="<%- m.avatar_url %>" alt="avatar"></img>', {variable: 'm'});
      // var tempImg = img({avatar_url: json.avatar_url});
      // $(".usr-img").html(tempImg);
      //
      //
      // var name = _.template('<%- m.name %>', { variable: 'm' });
      // var tempName = name({ name: json.name});
      // $('.my-name').html(tempName);
      //
      // var userName = _.template('<%- m.login %>', {variable: 'm'});
      // var tempUserName = userName({login: json.login});
      // $('.user-name').html(tempUserName);
      //
      // var org = _.template('<%- m.company %>', {variable: 'm'});
      // var tempOrg = org({company: json.company});
      // $(".organization").html(tempOrg);
      //
      // var loc = _.template('<%- m.location %>', {variable: 'm'});
      // var tempLoc = loc({location: json.location});
      // $(".location").html(tempLoc);
      //
      // var email = _.template('<%- m.email %>', {variable: 'm'});
      // var tempEmail = email({email: json.email});
      // $(".email").html(tempEmail);
      //
      // var link = _.template('<%- m.html_url %>', {variable: 'm'});
      // var tempLink = link({html_url: json.html_url});
      // $(".link").html(tempLink);
      //
      // var followers = _.template('<%- m.followers %>', {variable: 'm'});
      // var tempFollowers = followers({followers: json.followers});
      // $(".follows").html(json.following);
      //
      // var following = _.template('<%- m.following %>', {variable: 'm'});
      // var tempFollowing = following({following: json.following});
      // $(".followingg").html(tempFollowing);
   });

   $.getJSON("https://api.github.com/users/octocat/repos", function(json){
      $(".repo-name-1").html(json[4].name);
      console.log(json[4].name);
      // $(".repo-content-1").html(json[4].content);
      console.log(json[4].description);
   })

});
