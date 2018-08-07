$(document).ready(function() {
  $(".photo-link").click(function(){
    $("#image-show").fadeToggle();
  });
  $(".photo-link").click(function(){
    $("#image-hide").fadeToggle();
  });
  $(".photo-link").click(function(){
    $(".sand-castle").slideToggle();
  });
});
