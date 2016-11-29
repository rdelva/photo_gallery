//trigger even when scroll moves past the height of header
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p id='caption'></p>");
var $rightArrow = $("<img src='assets/img/rightArrow.png' id='rightArrow'>");
var $leftArrow = $("<img src='assets/img/leftArrow.png' id='leftArrow'>");


$overlay.append($image);
$("body").append($overlay);
$overlay.append($caption);
$overlay.append($rightArrow);
$overlay.append($leftArrow);


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
	 ctext = $(this).children("img").attr("alt");
	 $image.attr("src", link);
	 $caption.text(ctext);

	 $overlay.show();
	
});

$overlay.click(function(){
	$overlay.hide();
});


//Search function 



function captionList() {


	var item = document.querySelectorAll("#images img");


	/*var clist;
	clist = $("#images").children("img").toArray();

	*/

	return item;

}	

console.log(captionList());


$("#search").on("keypress", function(){


		
		


});