$(document).ready(function () {
    
    $('#next').on('click', function(){

        var currentSlide = $('.slide.active');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(500).removeClass('active');
        nextSlide.fadeIn(500).addClass('active');

        if (nextSlide.length == 0) {
            $('.slide').first().fadeIn(500).addClass('active');
        }


    });
    $('#prev').on('click', function(){

        var currentSlide = $('.slide.active');
        var nextSlide = currentSlide.prev();

        currentSlide.fadeOut(500).removeClass('active');
        nextSlide.fadeIn(500).addClass('active');

        if (nextSlide.length == 0) {
            $('.slide').last().fadeIn(500).addClass('active');
        }

    });

    setInterval(autoScroll, 3000);

    function autoScroll() {

    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(500).removeClass('active');
    nextSlide.fadeIn(500).addClass('active');

    if (nextSlide.length == 0) {
    $('.slide').first().fadeIn(500).addClass('active');
  }
}

$('.buttonSearch').on('click',function(){

   $('.box').animate({width:'toggle'},1000);

});

$('.btnsearch').on('click',function(){

    $('.modal').fadeIn(500);

});

$('.close').on('click',function(){

    $('.modal').fadeOut(500);

});


$('.switchE').hover(function() {
    $(this).find('.espada img').animate({width:'toggle'},350);
    $(this).find('.espadachange').animate({width:'toggle'},350);
}, function() {
    $(this).find('.espadachange').animate({width:'toggle'},350);
    $(this).find('.espada img').animate({width:'toggle'},350);
});


$('.switchC').hover(function() {
    $(this).find('.captains img').slideToggle(300);
    $(this).find('.captainschange').slideToggle(300);
}, function() {
    $(this).find('.captainschange').slideToggle(300);
    $(this).find('.captains img').slideToggle(300);
});








});