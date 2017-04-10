$(function() {
  $.scrollify({
		section:".panel",
    scrollbars:false,
    interstitialSection:".header,.footer",
    before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      $(".pagination a.active").removeClass("active");

      $(".pagination a[href=#" + ref + "]").addClass("active");
    },
	});

  $(".pagination a").on("click",function() {
    $.scrollify.move($(this).attr("href"));
  });
});
