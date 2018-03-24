
$(document).ready(function(){

	$("#filter li").on("click", function(){

		var category = $(this).html();

		$("#filter li").removeClass("active");
		$(this).addClass("active");

		$(".portfolio li").hide();
		$(".portfolio li").each(function(){

			if ($(this).hasClass(category)) {
				$(this).show();
			}


		});

	});


	
$('.portfolio img').on('click',function(){

	var src = $(this).attr('src');	

	$('#main').attr('src',src);
	$('.frameimg').fadeIn();
	$('.overlay-frame').fadeIn();

});

$('.overlay-frame').on('click',function(){

	$(this).fadeOut();
	$('.frameimg').fadeOut();


});








 });