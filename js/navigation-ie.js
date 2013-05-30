var heightofsubmenu = 162;
var speedofsubmenu = 300;
var speedofsubitems = 1200;

function submenu_width_drop_selector() {
	$jq(".mainNav ul li ul").each(function() {
    var elem = $jq(this);
    var numberofitems = elem.children("li").length;
	var subitemwidth = 960/numberofitems-2;
	elem.children("li").css('width', subitemwidth);

	});	
}
/* */
function image_fade() {
	$jq('.mainNav ul li ul li').hover(function(){
	    $jq(this).removeClass('image-fade').siblings().find('img').addClass('image-fade');
	    $jq(this).siblings().find('p').addClass('image-fade');
			},function(){
	    $jq(this).siblings().andSelf().find('img').removeClass('image-fade');
	    $jq(this).siblings().find('p').removeClass('image-fade');
			});
}
$jq(document).ready(function () { 
		
		submenu_width_drop_selector();
		image_fade();
    	//Set timeout for dropdown
	  	$jq(".mainNav ul .dropdown").hoverIntent(function() {
	  		$jq(this).find('.iearrow').show();
	    	var timeout = $jq(".mainNav ul .dropdown").data("timeout");
	    	if(timeout) clearTimeout(timeout);
	    	$jq(".parent_submenu").stop().animate({height : heightofsubmenu}, speedofsubmenu);
	    	$jq(this).children("ul").stop().delay(50).fadeTo(speedofsubitems,1);
	  	}, function() {
	      	$jq(".mainNav ul .dropdown").data("timeout", setTimeout($jq.proxy(function() {
	        $jq(".parent_submenu").stop().animate({height : 0}, "normal");	        
	      	}, this), 300));
	      	$jq(this).children("ul").stop().hide();
	      	$jq(this).find('.iearrow').hide();
	  	});
});