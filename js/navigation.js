 /*global $, jQuery, alert, Waypoint, document */
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
    
});

