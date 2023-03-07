(function($) {
    "use strict";
     $(document).on('ready', function() {	
	
			
		/*====================================
			Mobile Menu JS
		======================================*/ 
		$('.main-menu').slicknav({
			prependTo:".mobile-nav",
			label: '',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
		

		/*====================================
			Sidebar Popup JS
		======================================*/ 	
		$('.right-nav .bar').on( "click", function(){
			$('.sidebar-popup').addClass('active');
		});
		
		$('.sidebar-popup .cross').on( "click", function(){
			$('.sidebar-popup').removeClass('active');
		});
		
		
		

		/*====================================
			Scrool Up JS
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
		
		/*====================================
			Preloader JS
		======================================*/
		jQuery(window).load(function() {
			jQuery(".preeloader").fadeOut('slow', function(){
				jQuery(this).remove();
			});
		});
		
})(jQuery);
