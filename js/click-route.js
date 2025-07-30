// On page load, you can set active/inactive classes based on current URL path or hash
$(document).ready(function () {
    $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');

    var currentUrl = window.location.href;

    // Simple logic: activate link if href matches current page or hash
    $('.navbar-nav .nav-item .nav-link').each(function () {
        var linkHref = $(this).attr('href');

        if (currentUrl.indexOf(linkHref) !== -1) {
            $(this).removeClass('inactive').addClass('active');
        }
    });

    // Fallback: activate first link if none active
    if ($('.navbar-nav .nav-item .nav-link.active').length === 0) {
        $('.navbar-nav .nav-item .nav-link').eq(0).removeClass('inactive').addClass('active');
    }
});