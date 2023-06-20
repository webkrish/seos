


// $("button").click(function () {
//   $(".fa-times").toggle()
//   $(".fa-bars").toggle()
//   $("ul").toggle("slow")
// });

$("button").click(function(){
  $(".fa-times").toggle();
  $(".fa-bars").toggle();
  $("ul").animate({
      height: "toggle"
    });
});