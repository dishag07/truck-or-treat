$(document).ready(function() {
        $('#more-info').on('click', function() {
        $('.event-description').toggle();
    });
});


$(document).ready(function() {
    $('.trunk').on('mouseenter', function() {
        $(this).find('.description').stop(true, true).fadeIn(200);
    }).on('mouseleave', function() {
        $(this).find('.description').stop(true, true).fadeOut(200);
    });
});


$(document).ready(function() {
    $('.event-heading').on('click', function() {
        $(this).next('.event-details').stop(true, true).slideToggle(300);
    });
});
