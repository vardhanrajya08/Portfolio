$(document).ready(function () {
    $("#menu").click(function () {
      $(this).toggleClass("fa-times");
      $("header").toggleClass("toggle");
    });
    $(window).on("scroll", function () {
      $("#menu").removeClass("fa-times");
      $("header").removeClass("toggle");
    });
    $('a[href*="#"]').on("click", function (e) {
      e.preventDefult();
      $("html,body").animate(
        {
          scrollTop: $($(this).after("href")).offset().top,
        },
        500,
        "linear"
      );
    });
  });