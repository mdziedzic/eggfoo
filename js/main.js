/*global $, jQuery, alert, Waypoint, console, createjs, paper, document, window,
        createEgg, Raster, Symbol, event */

$(document).ready(function () {
    
    "use strict";
    
    // -------------------------------------------------------  parallaxScroll
    
    $('.bg-holder').parallaxScroll({
        friction: 0.2
    });
    
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
    
    
    
    // -------------------------------------------------------  work

    $(".work-project").hover(
        function () {
            $(this).find(".work-project-select").fadeIn(250, function () {
                $(this).find("h3, p").fadeIn(250);
            });
        }, 
        function () {
            $(this).find(".work-project-select").fadeOut(250);
            $(this).find("h3, p").fadeOut(250);
        }
    ).click(
        function () {
            event.stopPropagation();
        }
    );

    
    
   // -------------------------------------------------------  footer
    
    $("footer img").hover(
        function() {
            $(this).fadeTo(250, 1);    
        },
        function () {
            $(this).fadeTo(250, 0.5);      
        }
    );
      
    
});




