//----------------------------------------------------------------
//  Sweet Links V1.2
//----------------------------------------------------------------
// Built for the craic by Dave J. Fox
// Twitter:		https://twitter.com/davejfox/
// Github:		https://github.com/davejfox/
//
// Free to use, if you make something cool show me! 
//----------------------------------------------------------------
!function($){$.fn.extend({sweetLinks:function(t){var e={scrollTime:1e3,scrollOffset:0,newWindow:!1,classPrefix:"sl-",fileTypes:[".doc",".docx",".xls",".xlsx",".ppt",".pptx",".pdf",".pages",".key",".numbers"]};return jQuery.fn.elementAttr=function(t){return void 0!==this.attr(t)},$.extend(e,t),$(this).length?this.each(function(){if($.each(e.fileTypes,function(t,s){$("a[href*='"+s+"']").addClass(e.classPrefix+"download-"+s).attr("download","Download "+s)}),-1!==this.href.indexOf("mailto:")){if($(this).addClass(e.classPrefix+"email"),!$(this).elementAttr("title")){var t=$(this).attr("href"),s=t.split("mailto:")[1];$(this).attr("title","Send an email to "+s)}}else location.hostname!==this.hostname&&this.hostname.length?(e.newWindow===!0?$(this).attr("target","_blank").addClass(e.classPrefix+"new-tab "+e.classPrefix+"external"):$(this).addClass(e.classPrefix+"external"),$(this).elementAttr("rel")||$(this).attr("rel","external")):(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname)&&$(this).click(function(t){var s=$(this.hash);s=s.length?s:$("[name='"+this.hash.slice(1)+"']"),s.length&&(t.preventDefault(),$(this).addClass(e.classPrefix+"smooth-scroll"),$("html, body").stop().animate({scrollTop:s.offset().top+e.scrollOffset},e.scrollTime))});$(this).elementAttr("title")||$(this).attr("title",$(this).text())}):void 0}})}(jQuery);