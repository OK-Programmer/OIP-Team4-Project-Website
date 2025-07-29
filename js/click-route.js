var sectionArray = [1, 2, 3, 4, 5];

// Remove scroll event listener because scrolling to sections is irrelevant across pages

// Instead, on click, redirect to the appropriate page URL
$.each(sectionArray, function (index, value) {
    $('.click-scroll').eq(index).click(function (e) {
        e.preventDefault();

        // Define the URL to navigate for each section link
        // Adjust these URLs as per your actual page paths
        var pageUrls = [
            'index.html',
            'progress.html',
            'prototype.html',
        ];

        var targetUrl = pageUrls[index] || 'index.html';

        // Navigate to the target URL (normal browser redirect)
        window.location.href = targetUrl;
    });
});

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