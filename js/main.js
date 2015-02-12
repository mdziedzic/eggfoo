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
    
    var wp_section = new Waypoint({
        element: $("#services"),
        handler: function(direction) {
            $.notify(direction);
        }
    });

    
    
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

