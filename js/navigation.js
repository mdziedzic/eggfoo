 /*global $, jQuery, alert, Waypoint, document, Modernizr */

$(document).ready(function () {
    
    "use strict";
    
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
     
    
    if (Modernizr.touch) {
        $("#nav-nobar, #nav-bar").hide();
    }
    
    $("#nav-menu-home").addClass(navMenuHighlight); // for when page first loads
    
    // navigaton show/hide
    $("#nav-menu").hide();
    $("#nav-nobar, #nav-bar, #nav-menu").hover(
        function () {
            $("#nav-menu").stop().slideToggle(200, 'easeOutExpo');
        },
        function () {
            $("#nav-menu").stop().slideToggle(200, 'easeOutExpo');
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
    
    if ((document.referrer.indexOf("aroundtheworldin480days") != -1) ||
    (document.referrer.indexOf("rebeccakyrouacdesign") != -1) ||
    (document.referrer.indexOf("syllogism") != -1) ||
    (document.referrer.indexOf("philoandmimsy") != -1) ||
    (document.referrer.indexOf("studioalloy") != -1) ||
    (document.referrer.indexOf("eggfooclassic") != -1)) {
        document.getElementById('work').scrollIntoView();
        if ($("#home").scrollTop > 0) {  // this is to fix home being highlighted in nav-menu; kinda wonky, i know.
            $("#nav-menu-home").removeClass("nav-menu-location");
        }
    }
});
