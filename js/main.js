/*global $, jQuery, alert, Waypoint, console, createjs, paper, document, window,
        createEgg, Raster, Symbol, event */

$(document).ready(function () {
    
    "use strict";
    
    // -------------------------------------------------------  navigation
    
    function setupNavWaypoint(sPrev, sNext, navMenu, navMenuHighlight) {
        var sNextMenu = navMenu + sNext,
            sPrevMenu = navMenu + sPrev,
            wp = new Waypoint({
                element: $("#" + sNext),
                handler: function (direction) {
                    if (direction === "down") {
                        $(sNextMenu).addClass(navMenuHighlight);
                        $(sPrevMenu).removeClass(navMenuHighlight);
                    } else if (direction === "up") {
                        $(sNextMenu).removeClass(navMenuHighlight);
                        $(sPrevMenu).addClass(navMenuHighlight);
                    }
                },
                offset: "50%"
            });
        return wp;
    }

    var navMenu = "#nav-menu-",
        navMenuHighlight = "nav-menu-location",
        
        wp_services = setupNavWaypoint("home", "services", navMenu, navMenuHighlight),
        wp_work = setupNavWaypoint("services", "work", navMenu, navMenuHighlight),
        wp_about = setupNavWaypoint("work", "about", navMenu, navMenuHighlight),
        wp_contact = setupNavWaypoint("about", "contact", navMenu, navMenuHighlight),
        
        // waypoint for horizontal menu at top to show/hide
        wp_header = new Waypoint({
            element: $("#services"),
            handler: function (direction) {
                if (direction === "down") {
                    $("header").addClass("header-show");
                    $("header").removeClass("header-hide");
                } else if (direction === "up") {
                    $("header").addClass("header-hide");
                    $("header").removeClass("header-show");
                }
            },
            offset: "95%"
        });
     
    $("#nav-menu-home").addClass(navMenuHighlight); // for when page first loads
  
     
    // navigaton show/hide
    $("#nav-menu").hide();
    $("#nav-nobar, #nav-bar, #nav-menu").hover(
        function () {
            $("#nav-menu").stop().fadeToggle();
        },
        function () {
            $("#nav-menu").stop().fadeToggle();
        }
    );

    //  navigation highlight hovered-over link
    $("#nav-menu").find("p").hover(
        function () {
            $(this).addClass("nav-menu-select");
        },
        function () {
            $(this).removeClass("nav-menu-select");
        }
    );
    
    // navigation scroll to page sections
    $("a[href^='#']").click(function (event) {
        var $target = $($(this).attr("href"));
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $target.offset().top
        }, 500);
    });
    
    
    
    // -------------------------------------------------------  parallaxScroll
    
    $('.bg-holder').parallaxScroll({
        friction: 0.2
    });
    

    
    // -------------------------------------------------------  egg-mover
    
    var eMov = $('#egg-canvas'),
        wp_eggmover_bgservices_down = new Waypoint({
        element: $("#bg-services"),
        handler: function (direction) {
            if (direction === "down") {
                eMov.fadeOut(200, function() {
                    eMov.detach();
                    $('#work').prepend(eMov);
                    eMov.fadeIn(200);
                });
            } else if (direction === "up") {
                eMov.fadeOut(200, function() {
                    eMov.detach();
                    $('#services').prepend(eMov);                
                    eMov.fadeIn(200);
                });
            }
        },
        offset: "25%"
    });


    
    // -------------------------------------------------------  work

    $(".work-project").hover(
        function () {
            $(this).find(".work-project-select").fadeIn(200, function () {
                $(this).find("h3, p").fadeIn(200);
            });
        }, 
        function () {
            $(this).find(".work-project-select").fadeOut(200);
            $(this).find("h3, p").fadeOut(200);
        }
    ).click(
        function () {
            event.stopPropagation();
        }
    );
    
    
    
    // -------------------------------------------------------  parallax text
    
    var parallaxText1 = [ 
        "art &amp;<br /><span>technology</span>",
        "theory &amp;<br /><span>praxis</span>",
        "planning &amp;<br /><span>building</span>",
        "analysis &amp;<br /><span>synthesis</span>",
        "idea &amp;<br /><span>action</span>"
    ];

    var parallaxText2 = [ 
        "imaginary &amp;<br /><span>euler's</span>",
        "idealsim &amp;<br /><span>realims</span>",
        "dionysus &amp;<br /><span>apollo</span>",
        "jobs &amp;<br /><span>wozniak</span>",
        "jarndyce &amp;<br /><span>jarndyce</span>",
        "carriage return &amp;<br /><span>linefeed</span>"
    ];
    
    var index = Math.floor(Math.random() * parallaxText1.length);
    $("#bg-services .parallax-text").html(parallaxText1[index]);
    index = Math.floor(Math.random() * parallaxText2.length);
    $("#bg-work .parallax-text").html(parallaxText2[index]);
    
    // resize text as page resizes
    $("h1, .parallax-text").fitText(0.7);
    
      
    
});




