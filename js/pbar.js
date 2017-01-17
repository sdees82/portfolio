$(function(){
  $( document ).ready(function() {
    if($window.width() < 566){
      $(".retro").addClass("img-responsive");
    }else if ($window.width() > 768) {
      $(".retro").removeClass("img-responsive");

  }
});
var $window = $(window);

var $bottom = $window.scrollTop() + $window.height();


$('.glyphicon').click(function(){
  var height = -150;
  $('html,body').animate({

    scrollTop: $('#aboutheading').offset().top + height} ,'slow');
});



$window.resize(function(){


    if($window.width() < 566){
      $(".retro").addClass("img-responsive");
    }else if ($window.width() > 768) {
      $(".retro").removeClass("img-responsive");

  }
});




$window.scroll(function(){


var $bottom = $window.scrollTop() + $window.height();
if($window.width() > 768){
  if($bottom > 800){
  $(".aboutheading").css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},800);


  }
}


if($window.width() > 768){
  $("#link").attr('href',"#aboutheading");
  if($bottom > $("#recentWork").offset().top){
    $(".navbar").css({background:"rgba(0,0,0,0.5)"});
  }else {
    $(".navbar").css("background","transparent");
  }


}



  $(".progress-bar").each(function(i){

      var bottomOfEl = $(this).offset().top;
      var max = $(this).attr("aria-valuenow");
      var bar = $(".progress-bar").length;
      if(bottomOfEl <= $bottom){
        $(this).animate({
          width: max + "%"
        });

        if(bar >= 8){
          $(".progress-bar").stop(true,true);
        }

  }

  });


})



});
