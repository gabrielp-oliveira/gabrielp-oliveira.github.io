import React,{useEffect, useRef} from 'react'
import './drip.css'

function Drip({id}) {

    const wetGlass = useRef(null)

    useEffect(() => {
        console.log(id)
        var Drip = (function () {
          'use strict';
    
          let canvas = wetGlass.current
          let ctx,
            shapes = [{}, {}, {}, {}, {}, {}, {}, {}],
            i,
            width,
            height,
            ySpeed = 1,
            createShape = function () {
              var y,
                rad;
              let opacity = 0.01
              shapes.forEach(function (shape, index) {
                shape.points = [];
                shape.alpha = 1 - (index / shapes.length);
                shape.hue = (index % 5 === 0 ? 255 : 255) + ~~(Math.random() * 1);
                shape.saturation = 0;
                shape.lightness = 20;
                shape.opacity = opacity;
                for (i = 0; i < 21; ++i) {
                  y = (i % 2 === 0 ? Math.random() * 20 : Math.random() * (height * .25)) + (index * (height / (shapes.length - 1)));
                  rad = Math.random() * 50;
                  shape.points.push({
                    x: i * 20,
                    ox: i * 20,
                    y: y,
                    oy: y,
                    ooy: y,
                    rad: rad,
                    orad: rad,
                    angle: Math.PI * Math.random(),
                    speed: ((Math.PI / 180) + ((Math.PI / 180) * Math.random())) * .5
                  });
                }
                opacity += 0.05
              });
              shapes.reverse();
            },
            draw = function () {
              ctx.clearRect(0, 0, width, height);
              var toReorder;
              shapes.forEach(function (shape, index) {
                drawDrip(shape.points);
                var allDown = true,
                  maxY = 0;
    
                shape.points.forEach(function (point) {
                  point.angle += point.speed;
                  point.y = point.oy + (Math.sin(point.angle) * point.rad);
                  point.oy += ySpeed;
                  maxY = Math.max(point.y, maxY);
                  if (point.y < height) {
                    allDown = false;
                  }
                });
                shape.alpha = 1 - (Math.min(maxY, height) / height);
                if (allDown) {
                  shape.points.forEach(function (point) {
                    point.y -= maxY;
                    point.oy -= maxY;
                    toReorder = index;
                  });
                }
              });
              if (toReorder !== undefined) {
                shapes.push(shapes.splice(toReorder, 1)[0]);
              }
    
              requestAnimationFrame(draw);
            },
            drawDrip = function (points) {
              // ctx.fillStyle = color;
              ctx.fillStyle = 'rgb(255, 255, 255, ' + 0.05 + ')';
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(points[0].x, points[0].y);
    
              for (i = 1; i < points.length - 2; i++) {
                var xc = (points[i].x + points[i + 1].x) / 2;
                var yc = (points[i].y + points[i + 1].y) / 2;
    
                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
              }
    
              ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
              ctx.lineTo(width, 0);
              ctx.lineTo(0, 0);
              ctx.fill();
            },
    
            resizeHandler = function () {
              width = window.innerWidth;
              height = window.innerHeight;
              canvas.setAttribute('width', width);
              canvas.setAttribute('height', height);
              var xr = width / 400;
              var yr = height / 400;
    
              ySpeed = 1 * yr;
              shapes.forEach(function (shape, index) {
                shape.points.forEach(function (point) {
                  point.x = point.ox * xr;
                  point.oy = point.ooy * yr;
                  point.rad = point.orad * yr;
                });
              });
            },
    
            Drip = {
              init: function (_canvas) {
                  canvas = _canvas;
                  // console.log(canvas)
                width = 380
                height = 300;
                // let canvas = wetGlass.current
                console.log(id)
                ctx = canvas.getContext('2d');
                createShape();
                window.addEventListener('resize', resizeHandler);
                resizeHandler();
                draw();
              }
            };
    
          return Drip;
        }());
        Drip.init(document.getElementById(id));
    
    
    
      }, [wetGlass])
  return (

    <canvas id={id} useref={wetGlass} className='drip'></canvas>
    )
}

export default Drip