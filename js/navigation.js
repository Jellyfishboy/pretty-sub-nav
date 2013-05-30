/* 
Uber Navigation
Author: Tom Dallimore
Version: 3.0
*/
var heightofsubmenu = 200;
var speedofsubmenu = 300;
var speedofsubitems = 1200;

function submenu_width_drop_selector() {
	$(".mainNav ul li ul").each(function() {
    var elem = $(this);
    var numberofitems = elem.children("li").length;
	var subitemwidth = 960/numberofitems-10; //minus 4 to compensate for the 2px border either side 
	elem.children("li").css('width', subitemwidth);

	});	
}
/* */
function image_fade() {
	$('.mainNav ul li ul li').hover(function(){
	    $(this).removeClass('image-fade').siblings().find('img').addClass('image-fade');
	    $(this).siblings().find('p').addClass('image-fade');
			},function(){
	    $(this).siblings().andSelf().find('img').removeClass('image-fade');
	    $(this).siblings().find('p').removeClass('image-fade');
			});
}
$(document).ready(function () { 
		
		submenu_width_drop_selector();
		image_fade();
    	//Set timeout for dropdown
	  	$(".mainNav ul .dropdown").hoverIntent(function() {
	  		$(this).find('.iearrow').show();
	    	var timeout = $(".mainNav ul .dropdown").data("timeout");
	    	if(timeout) clearTimeout(timeout);
	    	$(".parent_submenu").stop().animate({height : heightofsubmenu}, speedofsubmenu);
	    	$(this).children("ul").stop().delay(50).fadeTo(speedofsubitems,1);
	  	}, function() {
	      	$(".mainNav ul .dropdown").data("timeout", setTimeout($.proxy(function() {
	        $(".parent_submenu").stop().animate({height : 0}, "normal");	        
	      	}, this), 300));
	      	$(this).children("ul").stop().hide();
	      	$(this).find('.iearrow').hide();
	  	});
});