/*global $, jQuery, alert, Waypoint, console, createjs, tick, view, Rectangle,
    Path, project, document, Raster, Symbol, Point, window, Size, Modernizr,
    onMouseMove:true */
/*jslint node: true */

"use strict";

var mousePoint = view.center,
    isPaused = true;


function onMouseUp(event) {
    isPaused = !isPaused;
}


document.getElementById("services").onclick = onMouseUp;

//function onMouseMove(event) {
//    mousePoint = event.point
//}
if (!Modernizr.touch) {
    onMouseMove = function (event) {
        mousePoint = event.point;
    };
}


function onResize(event) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var canvas = document.getElementById("egg-canvas");
    canvas.innerWidth = w;
    canvas.innerHeight = h;
    view.viewSize = new Size(w, h);
    view.draw();
}


function onFrame(event) {
    if (!isPaused) {
        var rangeX = view.size.width / 2;
        var deltaX = Math.abs(mousePoint.x - rangeX);
        var intensityX = Math.abs(deltaX / rangeX - 1) * 1500 + 100;
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
        item.rotate((Math.sin((event.count + i) / 100) * 12) * 0.1);
        }
    }
}


function createEgg(egg) {
    var center = Point.random() * view.size;
    var placedSymbol = egg.place(center);
    placedSymbol.scale(0.5);    
    placedSymbol.rotate(Math.floor(Math.random() * 360));    
}


createEgg(new Symbol(new Raster("egg300")));
createEgg(new Symbol(new Raster("egg300")));
createEgg(new Symbol(new Raster("egg300")));
createEgg(new Symbol(new Raster("egg300")));
createEgg(new Symbol(new Raster("egg500")));
createEgg(new Symbol(new Raster("egg500")));
createEgg(new Symbol(new Raster("egg500")));
createEgg(new Symbol(new Raster("egg500")));
createEgg(new Symbol(new Raster("egg1000")));
createEgg(new Symbol(new Raster("egg1000")));

