$(function(){
var $window = $(window);

var $bottom = $window.scrollTop() + $window.height();





/*$window.resize(function(){


    if($window.width() < 768){
      $(".aboutheading").hide();
    }else if ($window.width() > 768) {
      $(".aboutheading").show();

  }
});*/




$window.scroll(function(){


var $bottom = $window.scrollTop() + $window.height();
if($window.width() > 768){
  if($bottom > 800){
  $(".aboutheading").css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},500);


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

if($bottom > $("#skills-mobile").offset().top){
  console.log("it's working");
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
