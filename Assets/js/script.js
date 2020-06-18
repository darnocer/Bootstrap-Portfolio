$(document).ready(function () {
  $(".contact-nav").click(function (event) {
    $("#about").addClass("d-none");
    $("#portfolio").addClass("d-none");
    $("#contact").removeClass("d-none");
  });

  $(".about-nav").click(function (event) {
    $("#contact").addClass("d-none");
    $("#portfolio").addClass("d-none");
    $("#about").removeClass("d-none");
  });

  $(".portfolio-nav").click(function (event) {
    $("#about").addClass("d-none");
    $("#contact").addClass("d-none");
    $("#portfolio").removeClass("d-none");
  });
});
