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

  var userInfo = "https://api.github.com/users/octocat";
  var userRepo = "https://api.github.com/users/octocat/repos";
  $(".git-search").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        var userInfo = "https://api.github.com/users/"+$(this).val();
        var userRepo = "https://api.github.com/users/"+$(this).val()+"/repos";
        console.log(userInfo);
        console.log(userRepo);
        // location.reload();
    }
  });
  //this code via tori from http://www.levihackwith.com/code-snippet-how-to-sort-an-array-of-json-objects-by-property/
  function sortByProperty(property) {
    return function (a, b) {
     var sortStatus = 0;
     if (a[property] < b[property]) {
         sortStatus = -1;
     } else if (a[property] > b[property]) {
         sortStatus = 1;
     }
     return sortStatus;
   };
 };

   $.getJSON( userInfo, function( json ) {
     var time = new Date(json.created_at).toLocaleDateString();
    // console.log(userInfo);

      $(".usr-img").append('<img src="'+json.avatar_url+'" alt="avatar"></img>')
      $(".my-name").html(json.name);
      $(".user-name").html(json.login);
      $(".organization").html(json.company);
      $(".location").html( json.location );
      $(".email").html(json.email);
      $(".link").html(json.html_url);
      $(".joined").html(time);
      $(".follows").html(json.followers);
      $(".followingg").html(json.following);


   });
   $.getJSON(userRepo, function(json){
      var counter = _.size(json);

     json.sort(sortByProperty('stargazers_count'));
     if(counter-1 <= 5){
       for(var i = counter-1; i>=0; i--){
         $(".contrib-block").append('<div class="repository"><span class="octicon octicon-repo"></span><span class="repo-text"><a class="repo-name-1" href="#">'+json[i].name+'</a><p class="repo-content-1">'+json[i].description+'</p></span><div class="stars"><div class="num-stars num-stars-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div></div></div>');
     }
   }
     else if(counter-1 > 5){
       for(var i = counter-1; i>=counter-5; i--){
         $(".contrib-block").append('<div class="repository"><span class="octicon octicon-repo"></span><span class="repo-text"><a class="repo-name-1" href="#">'+json[i].name+'</a><p class="repo-content-1">'+json[i].description+'</p></span><div class="stars"><div class="num-stars num-stars-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div></div></div>');
     }
    }
   });


   $.getJSON(userRepo, function(json){
     var counter = _.size(json);

    json.sort(sortByProperty('updated_at'));

     for(var i = counter-1; i>=0; i--){
       var timeUd = new Date(json[i].updated_at).toLocaleString();
       $(".repo-block-test").append('<div class="repository"><span class="repo-text"><a href="#" class="rep-name-1">'+json[i].name+'</a><p class="repo-desc-1">'+json[i].description+'</p><h3 class="repo-time-ud-1"> Updated at '+timeUd+'</h3></span><div class="stars"><div class="num-stars num-stars-r-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div><div class="num-forked num-forked-1">'+json[i].forks_count+'</div><span class="octicon octicon-git-branch"></span></div></div>');
     };
   });

});
