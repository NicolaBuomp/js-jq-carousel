var slideLeft = $('.arrow-left');
var slideRight = $('.arrow-right');
var image = $('.image');


$(document).ready(function() {

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

        if (nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
    });


});