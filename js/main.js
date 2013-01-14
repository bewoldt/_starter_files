$(window).load(function() {
	// add js class to body if javascript enabled
    $('body').addClass('js');

    // Division-topbar Menu dropdown
    var $menu = $('#univ-nav'),
    $menulink = $('.menu-link');
    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

	// Flexslider
	$('.flexslider').flexslider({
		slideshow: false
	});
});
