$(document).ready(function () {

    $('.bg-holder').parallaxScroll({
        friction: 0.6
    });
    
    
    
    
    var waypoint = new Waypoint({
        element: $("#home h1"),
        handler: function (direction) {
//            $.notify(direction)
            if (direction === "down") {
                $("header").addClass("header-show");
                $("header").removeClass("header-hide");
            } else if (direction === "up") {
                $("header").addClass("header-hide");
                $("header").removeClass("header-show");
            }
        }
    })        

    
    $("#nav-nobar, #nav-bar").mouseover(function() {
        alert("bob");
    })
    
    
});

