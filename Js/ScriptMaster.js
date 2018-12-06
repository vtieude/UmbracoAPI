$(function() {
	$(".menu_navigation").each(function(){
		$(this).click(function() {
			$(".menu_navigation").removeClass(".active");
		});
    });
});
