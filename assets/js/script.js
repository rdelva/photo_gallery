//Sticky Header

function stickyHeader(){
	//1. 
	$(document).on("scroll", function(){

		if($(document).scrollTop() > 85) {

			$("header").addClass("sticky");
		} else {
			$("header").removeClass("sticky");
			}

	});
}

stickyHeader();


//Lightbox
lightbox.option({
	'resizeDuration': 200,
     'wrapAround': true,
     'maxWidth' : 1000,
     'showImageNumberLabel': false
 
})

//HideSeek

$(document).ready(function() {
	$('#search').hideseek({
	      list:           '.hideseek-data',
	      nodata:         '',
	      attribute:      'data-alt',
	      highlight:      false,
	      ignore:         '',
	      navigation:     false,
	      ignore_accents: false
	});
});


