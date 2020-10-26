
jQuery(document).ready(function() {

	jQuery(".alien").animate({"top":"0%"}, 3000, function() {
		jQuery(this).css("background-image","url(../assets/images/hurt.png)");
	});

	jQuery(".alien").hover(function() {
		jQuery(this).css("background-image","url(../assets/images/hurt.png)");
		jQuery(this).stop().animate({"top":"115%"}, 275, function() {
			jQuery(this).animate({"top":"0%"}, 3000);
			jQuery(this).css("background-image","url(../assets/images/alien.png)");
		});
	});

});