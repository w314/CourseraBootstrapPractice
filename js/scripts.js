$(document).ready(function() {
    // script for tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // CAROUSEL pause/play button script
    $('#mycarousel').carousel({interval: 1000});
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
        }
        else {
            $('#mycarousel').carousel('cycle');
        }
        $('#carouselButton').children('span').toggleClass('fa-pause fa-play');
    });

    // MODAL script
    // for loginModal
    $('#login').click(function() {
        $('#loginModal').modal('show');
    });
    // for reservationModal
    $('#reserveTable').click(function() {
        $('#reservationModal').modal('show');
    });
});