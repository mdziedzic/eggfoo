/*global $, jQuery, location, alert, Waypoint, console, createjs, tick, view, Rectangle,
    Path, project, document, Raster, Symbol, Point, window, Size, Modernizr,
    onMouseMove:true */
/*jslint node: true */

"use strict";

var eMov = $('#egg-canvas'),
    mousePoint = view.center,
    isPaused = false,
    maxHeight = document.getElementById("work").offsetHeight,
    firstTime = true;

// the following only applies to index.html
if (document.title === "EGGFOO") {
    var wp_eggmover_bgservices_down = new Waypoint({
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
        }),
        wp_eggmover_bgwork_down = new Waypoint({
            element: $("#bg-work"),
            handler: function (direction) {
                if (direction === "down") {
                    eMov.fadeOut(200, function() {
                        eMov.detach();
                        $('#about').prepend(eMov);
                        eMov.fadeIn(200);
                    });
                } else if (direction === "up") {
                    eMov.fadeOut(200, function() {
                        eMov.detach();
                        $('#work').prepend(eMov);                
                        eMov.fadeIn(200);
                    });
                }
            },
            offset: "25%"
        });
    
    document.getElementById("services").onclick = onMouseUp;
    document.getElementById("about").onclick = onMouseUp;
}

document.getElementById("work").onclick = onMouseUp;

function onMouseUp(event) {
    isPaused = !isPaused;
}

if (!Modernizr.touch) {
    onMouseMove = function (event) {
        mousePoint = event.point;
    };
}

function onResize(event) {
    var w = window.innerWidth,
        h = maxHeight,
        canvas = document.getElementById("egg-canvas");
    canvas.innerWidth = w;
    canvas.innerHeight = h;
    view.viewSize = new Size(w, h);
    view.draw();
    if (firstTime){
        createEggs();
        firstTime = false;
    }
}

function onFrame(event) {
    if (!isPaused && !Modernizr.touch) {
        var rangeX = view.size.width / 2;
        var deltaX = Math.abs(mousePoint.x - rangeX);
        var intensityX = Math.abs(deltaX / rangeX - 1) * 5000 + 700;
        if (mousePoint.x < rangeX) {
            intensityX = -intensityX;
        }
        for (var i = 0; i < project.activeLayer.children.length; i++) {
            var item = project.activeLayer.children[i];
            item.position.x += item.bounds.width / intensityX;
            item.position.y += item.bounds.height / 600;
            if (item.bounds.left > view.size.width) {
                item.position.x = -item.bounds.width / 2;
            } else if (item.bounds.right < 0) {
                item.position.x = view.size.width + item.bounds.width / 2;
            }
            if (item.bounds.top > view.size.height) {
                item.position.y = -item.bounds.height / 2;
            }
        item.rotate((Math.sin((event.count + i + item.rotProgress) / 100) * 12) * item.rotSpeed);
        }
    }
}

function placeEgg(egg, rotSpeed, rotProgress) {
    var center = Point.random() * view.size,
        placedSymbol = egg.place(center);
    placedSymbol.rotSpeed = rotSpeed;
    placedSymbol.rotProgress = 0;  // set to rotProgress for variation in cycles
    placedSymbol.scale(0.5);    
    placedSymbol.rotate(Math.floor(Math.random() * 360));    
}

function createEggs() {
    placeEgg(new Symbol(new Raster("egg300")), 0.025, 0);
    placeEgg(new Symbol(new Raster("egg300")), 0.010, 100);
    placeEgg(new Symbol(new Raster("egg300")), 0.030, 200);
    placeEgg(new Symbol(new Raster("egg300")), 0.017, 300);
    placeEgg(new Symbol(new Raster("egg500")), 0.025, 0);
    placeEgg(new Symbol(new Raster("egg500")), 0.013, 100);
    placeEgg(new Symbol(new Raster("egg500")), 0.017, 200);
    placeEgg(new Symbol(new Raster("egg500")), 0.015, 300);
    placeEgg(new Symbol(new Raster("egg1000")), 0.020, 0);
    placeEgg(new Symbol(new Raster("egg1000")), 0.010, 200);
}
