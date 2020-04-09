$(document).ready(function() {

    var slideLeft = $('.arrow-left');
    var slideRight = $('.arrow-right');

    slideLeft.click(function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }

    });

    slideRight.click(function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if ((nextImg.length) && (!nextImg.hasClass('slider'))) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
    });

});