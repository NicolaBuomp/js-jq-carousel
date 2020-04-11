$(document).ready(function() {

    var slideLeft = $('.arrow-left');
    var slideRight = $('.arrow-right');
    var first = $('.first');
    var last = $('.last');
    var firstC = $('.first-circle');
    var lastC = $('.last-circle');

    slideLeft.click(function() {
        left();
    });

    slideRight.click(function() {
        right();
    });

    // Function scorri a sinistra
    function left() {
        var currentImg = $('.active');
        var currentCircle = $('.active-circle')

        currentImg.removeClass('active');
        currentImg.prev().addClass('active');

        currentCircle.removeClass('active-circle');
        currentCircle.prev().addClass('active-circle');


        if (currentImg.hasClass('first')) {
            last.addClass('active');
            lastC.addClass('active-circle')
        }

    }


    // Function scorri a destra
    function right() {
        var currentImg = $('.active');
        var currentCircle = $('.active-circle')

        currentImg.removeClass('active');
        currentImg.next().addClass('active');

        currentCircle.removeClass('active-circle');
        currentCircle.next().addClass('active-circle');


        if (currentImg.hasClass('last')) {
            first.addClass('active');
            firstC.addClass('active-circle');
        }

    }

    // function sposta le immagini con le frecce
    $(document).keydown(function(x) {
        if (x.keyCode == 39) {
            right();
        } else if (x.keyCode == 37) {
            left();
        }
    });

});