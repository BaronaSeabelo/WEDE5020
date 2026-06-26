$(document).ready(function () {

  $(".search-bar input").on("keyup", function () {
    let value = $(this).val().toLowerCase();

    $(".product-card").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

  });

});

$(document).ready(function () {

  // open lightbox
  $(".lightbox-img").click(function () {
    let imgSrc = $(this).attr("src");

    $("#lightbox-image").attr("src", imgSrc);
    $("#lightbox").fadeIn();
  });

  // close button
  $("#close").click(function () {
    $("#lightbox").fadeOut();
  });

  // click outside image closes lightbox
  $("#lightbox").click(function (e) {
    if (e.target.id === "lightbox") {
      $("#lightbox").fadeOut();
    }
  });

});