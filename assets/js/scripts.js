$(document).ready(function(){
  'use strict';
  // var userInfo = "https://api.github.com/users/octocat";
  // var userRepo = "https://api.github.com/users/octocat/repos";
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
  $(".git-search").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        var userInfo = "https://api.github.com/users/"+$(this).val();
        var userRepo = "https://api.github.com/users/"+$(this).val()+"/repos";
        console.log(userInfo);
        console.log(userRepo);
        // location.reload();
    }
  });

   $.getJSON( "https://api.github.com/users/octocat", function( json ) {
     var time = new Date(json.created_at).toLocaleDateString();
    //  console.log(_.size(json));
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
     console.log(_.size(json));
      ///for 'popular repos' tab
      // $(".repo-name-1").html(json[4].name);
      // $(".repo-content-1").html(json[4].description);
      // $(".num-stars-1").html(json[4].stargazers_count);
      //
      // $(".repo-name-2").html(json[2].name);
      // $(".repo-content-2").html(json[2].description);
      // $(".num-stars-2").html(json[2].stargazers_count);
      //
      // $(".repo-name-3").html(json[1].name);
      // $(".repo-content-3").html(json[1].description);
      // $(".num-stars-3").html(json[1].stargazers_count);
      //
      // $(".repo-name-4").html(json[3].name);
      // $(".repo-content-4").html(json[3].description);
      // $(".num-stars-4").html(json[3].stargazers_count);
      //
      // $(".repo-name-5").html(json[0].name);
      // $(".repo-content-5").html(json[0].description);
      // $(".num-stars-5").html(json[0].stargazers_count);

      var counter = _.size(json);
      function sortByProperty(property) {
        'use strict';
        return function (a, b) {
         var sortStatus = 0;
         if (a[property] < b[property]) {
             sortStatus = -1;
         } else if (a[property] > b[property]) {
             sortStatus = 1;
         }
         return sortStatus;
       };
     }

     json.sort(sortByProperty('stargazers_count'));
     if(counter-1 <= 5){
       for(var i = counter-1; i>=0; i--){
         console.log(i);
         $(".contrib-block").append('<div class="repository"><span class="octicon octicon-repo"></span><span class="repo-text"><a class="repo-name-1" href="#">'+json[i].name+'</a><p class="repo-content-1">'+json[i].description+'</p></span><div class="stars"><div class="num-stars num-stars-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div></div></div>');
     }
   }
     else if(counter-1 > 5){
       for(var i = counter-1; i>=counter-5; i--){
         console.log(i);
         $(".contrib-block").append('<div class="repository"><span class="octicon octicon-repo"></span><span class="repo-text"><a class="repo-name-1" href="#">'+json[i].name+'</a><p class="repo-content-1">'+json[i].description+'</p></span><div class="stars"><div class="num-stars num-stars-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div></div></div>');
     }
    }



      //for repos tab
      // var timeUd1 = new Date(json[4].updated_at).toLocaleString();
      // $(".num-forked-1").html(json[4].forks_count);
      // $(".rep-name-1").html(json[4].name);
      // $(".repo-desc-1").html(json[4].description);
      // $(".num-stars-r-1").html(json[4].stargazers_count);
      // $(".repo-time-ud-1").html("Updated: "+timeUd1);
      //
      // var timeUd2 = new Date(json[3].updated_at).toLocaleString();
      // $(".num-forked-2").html(json[3].forks_count);
      // $(".rep-name-2").html(json[3].name);
      // $(".repo-desc-2").html(json[3].description);
      // $(".num-stars-r-2").html(json[3].stargazers_count);
      // $(".repo-time-ud-2").html("Updated: "+timeUd2);
      //
      // var timeUd3 = new Date(json[2].updated_at).toLocaleString();
      // $(".num-forked-3").html(json[2].forks_count);
      // $(".rep-name-3").html(json[2].name);
      // $(".repo-desc-3").html(json[2].description);
      // $(".num-stars-r-3").html(json[2].stargazers_count);
      // $(".repo-time-ud-3").html("Updated: "+timeUd3);
      //
      //
      // var timeUd4 = new Date(json[1].updated_at).toLocaleString();
      // $(".num-forked-4").html(json[1].forks_count);
      // $(".rep-name-4").html(json[1].name);
      // $(".repo-desc-4").html(json[1].description);
      // $(".num-stars-r-4").html(json[1].stargazers_count);
      // $(".repo-time-ud-4").html("Updated: "+timeUd4);
      //
      // var timeUd5 = new Date(json[0].updated_at).toLocaleString();
      // $(".num-forked-5").html(json[0].forks_count);
      // $(".rep-name-5").html(json[0].name);
      // $(".repo-desc-5").html(json[0].description);
      // $(".num-stars-r-5").html(json[0].stargazers_count);
      // $(".repo-time-ud-5").html("Updated: "+timeUd5);
   });


   $.getJSON("https://api.github.com/users/octocat/repos", function(json){
     var counter = _.size(json);
     //this code via tori from http://www.levihackwith.com/code-snippet-how-to-sort-an-array-of-json-objects-by-property/
     function sortByProperty(property) {
       'use strict';
       return function (a, b) {
        var sortStatus = 0;
        if (a[property] < b[property]) {
            sortStatus = -1;
        } else if (a[property] > b[property]) {
            sortStatus = 1;
        }
        return sortStatus;
      };
    }

    json.sort(sortByProperty('updated_at'));

     for(var i = counter-1; i>=0; i--){
       var timeUd = new Date(json[i].updated_at).toLocaleString();
       $(".repo-block-test").append('<div class="repository"><span class="repo-text"><a href="#" class="rep-name-1">'+json[i].name+'</a><p class="repo-desc-1">'+json[i].description+'</p><h3 class="repo-time-ud-1"> Updated at '+timeUd+'</h3></span><div class="stars"><div class="num-stars num-stars-r-1">'+json[i].stargazers_count+'</div><div class="octicon octicon-star"></div><div class="num-forked num-forked-1">'+json[i].forks_count+'</div><span class="octicon octicon-git-branch"></span></div></div>');
     };
   });

});
