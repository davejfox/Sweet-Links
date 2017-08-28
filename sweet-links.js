//----------------------------------------------------------------
//  Sweet Links V1.0
//----------------------------------------------------------------
// Built for the craic by Dave J. Fox
// Twitter: 	@davejfox
// Github: 		davejfox
//
// Free to use, if you make something cool show me! 
//----------------------------------------------------------------


//----------------------------------------------------------------
//  Options
//----------------------------------------------------------------
// var defaults = {
// 	scrollTime : 1000,
// 	newTabs : false,
// 	selector : "a",
// 	classPrefix : "sl-",
// 	fileTypes : ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "pages", "keynote", "numbers"]
// };

var $scrollTime = 1000; // The time that the smooth-scrolling action takes to complete, in milliseconds.
var $newTabs = false; // true / false - whether you want external links to have target="_blank" added.
var selector = "a"; // By default Sweet Links is applied to all <a> but you can change this here. Using a:not('class-name') might be useful.
var $classPrefix = "sl-"; // All classes that are added to elements are prefixed with "sl-" but you can change that here if you like.
var fileTypes = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "pages", "keynote", "numbers"]; // Supported file types 


//----------------------------------------------------------------
//  The Nitty Gritty
//----------------------------------------------------------------
jQuery(document).ready(function($) {

	jQuery.fn.elementAttr = function(name) {  
		return this.attr(name) !== undefined;
	};

	if($(selector).length) {

		$(selector).each(function(){

			// IF - internal link
			if (location.hostname === this.hostname || !this.hostname.length) {
				
				if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") || location.hostname === this.hostname) {

					$(this).click(function(e) {
						var target = $(this.hash);
						target = target.length ? target : $("[name='" + this.hash.slice(1) +"']");
							
						if (target.length) {
							e.preventDefault();
							$(this).addClass($classPrefix + "smooth-scroll");
							$("html, body").stop().animate({
								scrollTop: target.offset().top
							}, $scrollTime);
						}
					});
				}
			// ELSE - external link
			} else {
				
				// Adds target="_blank" if desired.
				if ($newTabs === true) {
					$(this).attr("target", "_blank").addClass($classPrefix + "new-tab" + " " + $classPrefix + "external");
				} else {
					$(this).addClass($classPrefix + "external");
				}

				// Adds rel="external" to external links.
				if(!$(this).elementAttr("rel")) {
					$(this).attr("rel", "external");
				}
			} // End of internal / external query.

			// Adds title attribute if it doesn't exist already.
			if(!$(this).elementAttr("title")) {
				$(this).attr("title", $(this).text());
			}
		});

		// If the href links to a file type, the download attribute will be added and a file type specific class will be added.
		$.each(fileTypes, function(i, val) {
			$("a[href*='" + val + "']").addClass($classPrefix + "download-" + val).attr("download", "Download " + val);
		});
	}
});