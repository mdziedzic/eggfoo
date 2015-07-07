/*global $, jQuery, alert, Waypoint, console, createjs, paper, document, window,
        createEgg, Raster, Symbol, event */

$(document).ready(function () {
    
    "use strict";
    
    $("body").fadeIn(750);
    
    if ((document.referrer.indexOf("aroundtheworldin480days") != -1) ||
        (document.referrer.indexOf("rebeccakyrouacdesign") != -1) ||
        (document.referrer.indexOf("syllogism") != -1) ||
        (document.referrer.indexOf("philoandmimsy") != -1) ||
        (document.referrer.indexOf("studioalloy") != -1) ||
        (document.referrer.indexOf("eggfooclassic") != -1)) {
        document.getElementById('work').scrollIntoView();
    }
    
    
    
    // -------------------------------------------------------  parallaxScroll
    
    $('.bg-holder').parallaxScroll({
        friction: 0.2
    });
    
    var parallaxText1 = [ 
        "lorem ipsum<br /><span>hoc est mortuum<br />psittacus</span>",
        "lorem ipsum<br /><span>caseum<br />emere velim</span>",
        "lorem ipsum<br /><span>meum cerebrum<br />nocet</span>",
        "lorem ipsum<br /><span>suus 'laganumque<br />tenuis</span>"
    ];

    var parallaxText2 = [ 
        "&lt;div&gt;<br />&lt;!-- bigdata --&gt;<br /><span>&lt;/div&gt;</span>",
        "@keyframes<br />errror {<br /><span>0% {</span>",
        "&lt;?php require(<br /><span>\"420.php\"); ?&gt;</span>",
        "var review = new Meeting();<br /><span>grayHair++;</span>",
        "$(document)<br />.ready(<br /><span>function () {</span>"
    ];
    
    var index = Math.floor(Math.random() * parallaxText1.length);
    $("#bg-services .parallax-text").html(parallaxText1[index]);
    index = Math.floor(Math.random() * parallaxText2.length);
    $("#bg-work .parallax-text").html(parallaxText2[index]);
    
    // resize text as page resizes
    $("h1, .parallax-text").fitText(0.7);
    
    
    
    // -------------------------------------------------------  work

    $(".work-project a").hover(
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
    );

    $(".fadeLink").click(
        function () {
            event.preventDefault();
            var newLocation = this.href;
            $("body").fadeOut(750, function () {
                window.location = newLocation;
            });
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
    

    
    // -------------------------------------------------------  eggfoo logo scroll
    
    // navigation scroll to page sections
    $("a[href^='#']").click(function (event) {
        var $target = $($(this).attr("href"));
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $target.offset().top
        }, 500);
    });
    
      
    
});




