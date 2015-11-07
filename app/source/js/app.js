$( document ).ready(function() {
    'use strict';
    var percent = 1;
    $('body').loadie(percent);

    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

    // Masonry Gallery
    $('#container').imagesLoaded( function(){
        $('.grid').masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.grid-item',
            // use element for option
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });

    // Photo's popups
    // if(isMobile) {
    //     $(function() {
    //         $(".open-popup").fullScreenPopup({
    //             bgColor: '#e67e22'
    //         });
    //     });
    // }

    // Open Contact popup
    $('.open-contact').fullScreenPopup({
        bgColor: '#fdfdfd',
        inlineStyles: true,
        lockDocumentScroll: true,
        mainWrapperClass: 'fsp-wrapper',
        contentWrapperClass: 'fsp-content',
        closePopupClass: 'fsp-close',
        animationSpeed: 200, //ms
    });

    // Tabs
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    // Sticky info-bar
    $(".m-header--info-bar").sticky({ topSpacing: 0, responsiveWidth: true });


    var document = window.document,
        docElem = document.documentElement;

    function extend( a, b ) {
        for( var key in b ) { 
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }

    // from https://github.com/ryanve/response.js/blob/master/response.js
    function getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];
        if( client < inner )
            return inner;
        else
            return client;
    }

    // http://stackoverflow.com/a/11396681/989439
    function getOffset( el ) {
        return el.getBoundingClientRect();
    }

    // http://snipplr.com/view.php?codeview&id=5259
    function isMouseLeaveOrEnter(e, handler) { 
        if (e.type != 'mouseout' && e.type != 'mouseover') return false; 
        var reltg = e.relatedTarget ? e.relatedTarget : 
        e.type == 'mouseout' ? e.toElement : e.fromElement; 
        while (reltg && reltg != handler) reltg = reltg.parentNode; 
        return (reltg != handler); 
    }

    function cbpTooltipMenu( el, options ) {  
        this.el = el;
        this.options = extend( this.defaults, options );
        this._init();
    }

    cbpTooltipMenu.prototype = {
        defaults : {
            // add a timeout to avoid the menu to open instantly
            delayMenu : 100
        },
        _init : function() {
            this.touch = Modernizr.touch;
            this.menuItems = document.querySelectorAll( '#' + this.el.id + ' > div' );
            this._initEvents();
        },
        _initEvents : function() {
            var self = this;

            Array.prototype.slice.call( this.menuItems ).forEach( function( el, i ) {
                var trigger = el.querySelector( 'a' );
                if( self.touch ) {
                    trigger.addEventListener( 'click', function( ev ) { self._handleClick( this, ev ); } );
                }
                else {
                    trigger.addEventListener( 'click', function( ev ) {
                        if( this.parentNode.querySelector( '.cbp-tm-submenu' ) ) {
                            ev.preventDefault();
                        }
                    } );
                    el.addEventListener( 'mouseover', function(ev) { if( isMouseLeaveOrEnter( ev, this ) ) self._openMenu( this ); } );
                    el.addEventListener( 'mouseout', function(ev) { if( isMouseLeaveOrEnter( ev, this ) ) self._closeMenu( this ); } );
                }
            } );

        },
        _openMenu : function( el ) {

            var self = this;
            clearTimeout( this.omtimeout );
            this.omtimeout = setTimeout( function() {
                var submenu = el.querySelector( '.cbp-tm-submenu' );

                if( submenu ) {
                    el.className = 'cbp-tm-show';
                    if( self._positionMenu( el ) === 'top' ) {
                        el.className += ' cbp-tm-show-above';
                    }
                    else {
                        el.className += ' cbp-tm-show-below';
                    }
                }
            }, this.touch ? 0 : this.options.delayMenu );

        },
        _closeMenu : function( el ) {
            
            clearTimeout( this.omtimeout );

            var submenu = el.querySelector( '.cbp-tm-submenu' );

            if( submenu ) {
                // based on https://github.com/desandro/classie/blob/master/classie.js
                el.className = el.className.replace(new RegExp("(^|\\s+)" + "cbp-tm-show" + "(\\s+|$)"), ' ');
                el.className = el.className.replace(new RegExp("(^|\\s+)" + "cbp-tm-show-below" + "(\\s+|$)"), ' ');
                el.className = el.className.replace(new RegExp("(^|\\s+)" + "cbp-tm-show-above" + "(\\s+|$)"), ' ');
            }

        },
        _handleClick : function( el, ev ) {
            var item = el.parentNode,
                items = Array.prototype.slice.call( this.menuItems ),
                submenu = item.querySelector( '.cbp-tm-submenu' )

            // first close any opened one..
            if( typeof this.current !== 'undefined' &&  items.indexOf( item ) !== this.current ) {
                this._closeMenu( this.el.children[ this.current ] );
                this.el.children[ this.current ].querySelector( '.cbp-tm-submenu' ).setAttribute( 'data-open', 'false' );
            }

            if( submenu ) {
                ev.preventDefault();

                var isOpen = submenu.getAttribute( 'data-open' );

                if( isOpen === 'true' ) {
                    this._closeMenu( item );
                    submenu.setAttribute( 'data-open', 'false' );
                }
                else {
                    this._openMenu( item );
                    this.current = items.indexOf( item );
                    submenu.setAttribute( 'data-open', 'true' );
                }
            }

        },
        _positionMenu : function( el ) {
            // checking where's more space left in the viewport: above or below the element
            var vH = getViewportH(),
                ot = getOffset(el),
                spaceUp = ot.top ,
                spaceDown = vH - spaceUp - el.offsetHeight;
            
            return ( spaceDown <= spaceUp ? 'top' : 'bottom' );
        }
    };

    // add to global namespace
    window.cbpTooltipMenu = cbpTooltipMenu;

    // Tooltip Dropdown
    if ($('.cbp-tm-menu').length) {
        var menu = new cbpTooltipMenu( document.querySelector( '.cbp-tm-menu' ) );
    }

    // LightBox
    var initPhotoSwipeFromDOM = function(gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for(var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes 
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML; 
                }

                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect(); 

                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }

            };

            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if( isNaN(options.index) ) {
                return;
            }

            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll( gallerySelector );

        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.my-gallery');

    var settings = {
        toggle: '.slider-toggle', // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
        exit_selector: '.slider-exit', // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
        animation_duration: '0.5s', //how long it takes to slide the menu
        place: 'bottom', //where is the menu sliding from, possible options are (left | right | top | bottom)
        animation_curve: 'cubic-bezier(0.54, 0.01, 0.57, 1.03)', //animation curve for the sliding animation
        body_slide: false, //set it to true if you want to use the effect where the entire page slides and not just the div
        no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
    };

    $('#menu').sliiide(settings); //initialize sliiide

    $('#page').fadeIn(2000);
});

