'use strict';
$( document ).ready(function() {

    // Masonry Gallery
    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true
    });

    // Photo's popups
    $(function() {
        $(".open-popup").fullScreenPopup({
            bgColor: '#e67e22'
        });
    });

    // Open Contact popup
    $(".open-contact").fullScreenPopup({
        bgColor: "#fdfdfd",
        inlineStyles: true,
        lockDocumentScroll: true,
        mainWrapperClass: "fsp-wrapper",
        contentWrapperClass: "fsp-content",
        closePopupClass: "fsp-close",
        animationSpeed: 200, //ms
    });

});
