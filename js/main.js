/*global $, jQuery, alert, Waypoint */

$(document).ready(function () {
    
    "use strict";

    // -------------------------------------------------------  waypoints
    
    function setupWaypoint(sPrev, sNext, navMenu, navMenuHighlight) {
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
        
        wp_services = setupWaypoint("home", "services", navMenu, navMenuHighlight),
        wp_work = setupWaypoint("services", "work", navMenu, navMenuHighlight),
        wp_about = setupWaypoint("work", "about", navMenu, navMenuHighlight),
        wp_contact = setupWaypoint("about", "contact", navMenu, navMenuHighlight),
        
        wp_header = new Waypoint({
            element: $("#home").find("h1"),
            handler: function (direction) {
                if (direction === "down") {
                    $("header").addClass("header-show");
                    $("header").removeClass("header-hide");
                } else if (direction === "up") {
                    $("header").addClass("header-hide");
                    $("header").removeClass("header-show");
                }
            }
        });
     
    $("#nav-menu-home").addClass(navMenuHighlight); // for when page first loads
  
    
    
    // -------------------------------------------------------  navigation
    
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
    $("a[href^='#']", "#nav-menu").click(function (event) {
        var $target = $($(this).attr("href"));
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $target.offset().top
        }, 500);
    });
    
    
    
    // -------------------------------------------------------  parallaxScroll
    
    $('.bg-holder').parallaxScroll({
        friction: 0.6
    });
    
    
    

});

