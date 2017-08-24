var selector = "a";



jQuery(document).ready(function($) {

	jQuery.fn.elementAttr = function(name) {  
		return this.attr(name) !== undefined;
	};

	// Options
	var $scrolltime = 1000; // The time that the smoothscrolling action takes to complete, in milliseconds.
	var $newtabs = true; // true / false - wheater you want external links to have target="_blank" added.

	if($(selector).length) {

		$(selector).each(function(){

			var $title = $(this).text() + " (external)";

			if ($newtabs === true) {
				var $title = $(this).text() + " (external - opens in new tab)";
			}

			// If internal link
			if (location.hostname === this.hostname || !this.hostname.length) {
				
				if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") || location.hostname === this.hostname) {

					$(this).click(function(e) {
						var target = $(this.hash);
						target = target.length ? target : $("[name='" + this.hash.slice(1) +"']");
							
						if (target.length) {
							e.preventDefault();
							$("html, body").stop().animate({
								scrollTop: target.offset().top
							}, $scrolltime);
						}
					});
				}
			// Else external link
			} else {
				

				if ($newtabs === true) {
					$(this).attr("target", "_blank");
				}

				if(!$(this).elementAttr('rel')) {
					$(this).attr("rel", "external");
				}

			}

			if(!$(this).elementAttr('title')) {
				$(this).attr("title", $title);
			}
		});
	}
});