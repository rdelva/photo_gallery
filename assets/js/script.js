//trigger even when scroll moves past the height of header
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p id='caption'></p>");
var $keycode

$overlay.append($image);
$("body").append($overlay);
$($overlay).append($caption);


$(document).on("scroll", function(){

	if ($(document).scrollTop() > 0) {  //if scrollTop is more than zero trigger the sticky class

		$("header").addClass("sticky");

		} else {

			$("header").removeClass("sticky");
		}

});

//1. select an image
$("#images a").click(function(e){
	
	e.preventDefault();
	var link;
	var ctext;
	//2. look at the anchor tag and grab the link 
	 link =  $(this).attr("href");
	 ctext = $(this).children().attr("alt");
	 $image.attr("src", link);
	 $caption.text(ctext);

	 $overlay.show();
	
});

console.log();

$overlay.click(function(){

	$overlay.hide();
});



/*$(document).on("keypress", function(event){

console.log(event);
});*/
