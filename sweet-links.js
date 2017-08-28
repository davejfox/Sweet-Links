//----------------------------------------------------------------
//  Sweet Links V1.0
//----------------------------------------------------------------
// Built for the craic by Dave J. Fox
// Twitter: 	@davejfox
// Github: 		davejfox
//
// Free to use, if you make something cool show me! 
//----------------------------------------------------------------
(function($){

 	$.fn.extend({

 		sweetLinks: function(options) {

			var defaults = {
				selector : "a",
				scrollTime : 1000,
				newTabs : false,
				classPrefix : "sl-",
				fileTypes : ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "pages", "keynote", "numbers"]
			};

			jQuery.fn.elementAttr = function(name) {  
				return this.attr(name) !== undefined;
			};
			
			$.extend(defaults, options);

			if($(this).length) {
		
				return this.each(function() {

					// IF - internal link
					if (location.hostname === this.hostname || !this.hostname.length) {
						
						if (location.pathname.replace(/^\//,"") === this.pathname.replace(/^\//,"") || location.hostname === this.hostname) {

							$(this).click(function(e) {
								var target = $(this.hash);
								target = target.length ? target : $("[name='" + this.hash.slice(1) +"']");
									
								if (target.length) {
									e.preventDefault();
									$(this).addClass(defaults.classPrefix + "smooth-scroll");
									$("html, body").stop().animate({
										scrollTop: target.offset().top
									}, defaults.scrollTime);
								}
							});
						}
					// ELSE - external link
					} else {
						
						// Adds target="_blank" if desired.
						if (defaults.newTabs === true) {
							$(this).attr("target", "_blank").addClass(defaults.classPrefix + "new-tab" + " " + defaults.classPrefix + "external");
						} else {
							$(this).addClass(defaults.classPrefix + "external");
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

					// If the href links to a file type, the download attribute will be added and a file type specific class will be added.
					$.each(defaults.fileTypes, function(i, val) {
						$("a[href*='" + val + "']").addClass(defaults.classPrefix + "download-" + val).attr("download", "Download " + val);
					});
				});
			}
		}
	});
})(jQuery);