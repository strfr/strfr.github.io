$(document).ready(function() {
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});  
	$("#image_list a").click(function(evt) {
		var imageURL = $(this).attr("href");	
		var caption = $(this).attr("title");
		$("#image").fadeOut(1000);
        $("#caption").fadeOut(1000);  
		setTimeout(function() {
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);
		}, 1000);
		$("#image").fadeIn(1000);
		$("#caption").fadeIn(1000);
		evt.preventDefault();
	});
	$("li:first-child a").focus();
});