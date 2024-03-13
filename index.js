$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

$(function () {
  // Since there's no list-group/tab integration in Bootstrap
  $(".list-group-item").on("click", function (e) {
    var previous = $(this).closest(".list-group").children(".active");
    previous.removeClass("active"); // previous list-item
    $(e.target).addClass("active"); // activated list-item
  });
});



