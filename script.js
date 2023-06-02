var win = $(this); // browser window
var nav = $(".navbar"); // your navigation bar

function switchNavbar() {
  if (win.width() < 768) {
    // on mobile
    nav.removeClass("navbar-static-top");
    nav.addClass("navbar-fixed-bottom");
  } else {
    // on desktop
    nav.removeClass("navbar-fixed-bottom");
    nav.addClass("navbar-static-top");
  }
}

// On first load
$(function () {
  switchNavbar();
});

// When browser resized
$(window).on("resize", function () {
  switchNavbar();
});

$(document).ready(function () {
  $(window).resize(function () {
    $("#toHide").hide();
  });

  $("#showtoHide").click(function () {
    $("#toHide").show();
  });
});
