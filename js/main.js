$(document).ready(function () {

    $('.bg-holder').parallaxScroll({
        friction: 0.6
    });
    
    
    // -------------------------------------------------------  waypoints    
    
    var waypoint = new Waypoint({
        element: $("#home h1"),
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
        
    function setupWaypoint(sPrev, sNext, navMenu, navMenuHighlight) {
        var sNextMenu = navMenu + sNext;
        var sPrevMenu = navMenu + sPrev;
        var wp = new Waypoint({
            element: $("#" + sNext),
            handler: function(direction) {
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

    var navMenu = ".nav-menu-";
    var navMenuHighlight = "nav-menu-location";
    
    $(".nav-menu-home").addClass(navMenuHighlight);
    
    var wp_services = setupWaypoint("home", "services", navMenu, navMenuHighlight);
    var wp_work = setupWaypoint("services", "work", navMenu, navMenuHighlight);
    var wp_about = setupWaypoint("work", "about", navMenu, navMenuHighlight);
    var wp_contact = setupWaypoint("about", "contact", navMenu, navMenuHighlight);
     
  
    
    // -------------------------------------------------------  navigation
    
    // navigaton show/hide
    $("#nav-menu").hide();
    $("#nav-nobar, #nav-bar, #nav-menu").hover(
            function() {
                $("#nav-menu").stop().fadeToggle();
            }, function() { 
                $("#nav-menu").stop().fadeToggle();
            }
    );

    //  navigation highlight hovered-over link
    $("#nav-menu p").hover(
        function() {
            $(this).addClass("nav-menu-select");
        }, function() {
            $(this).removeClass("nav-menu-select");
        }
    );
    
    // navigation scroll to page sections
    $("a[href^='#']").click(function(event) {
        var target = $($(this).attr("href"));
        event.preventDefault();
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500);
    });    
    
    
    
});

