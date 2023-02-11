import React, { useEffect, useRef, useState } from 'react'

function Sky() {
    const skyCanvas = useRef(null)
    const [ratio, setRatio] = useState([0, 0])
    
    useEffect(() => {
        let {innerWidth,innerHeight } = window

        window.addEventListener('resize',(e) => {
            innerHeight = e.target.innerHeight + 100
          innerWidth = e.target.innerWidth
        })
        
        setRatio([innerWidth, innerHeight])
        const zzfxR = 44100; // sample rate


        const sky = skyCanvas.current
        const context = sky.getContext("2d");


        // variables
        let brightness, i, frame, rand, lightning, mouseX;

        function zzfx(e ){
            // init parameters
            let attack = 3,
                decay = 0,
                sustain = 0,
                release = 3,
                bitCrush = .05 + rand(.05),
                delay = .2 + rand(.2),
                sustainVolume = 1;

            if (e == 1) {
                attack = .1
                    decay = .1
                    sustain = rand()
                    release = 3 + rand(2)
                    sustainVolume = .5
                    bitCrush = .5 + rand(1);
                delay = .3 + rand(.5);
            }

            // scale by sample rate
            attack *= zzfxR;
            decay *= zzfxR;
            sustain *= zzfxR;
            release *= zzfxR;
            delay *= zzfxR;

            // generate waveform


        }

        // init
        rand = (r = 1) => Math.random() * r;
        lightning = (X, Y, V, Z) => context.fillRect(X, Y, Z, Z,
            rand(99) > 98 && Z > 9 && lightning(X, Y, V, rand(Z * .8) + 2),
            Y < sky.height && lightning(X + V * Z / 9, Y + Z / 4, rand(99) > 95 ? rand(8) - 4 : V, Z))

        brightness = frame = mouseX = 0;

        setInterval(_ => // main game loop
        {
            /*context.fillStyle='#000';
            context.font = '8in"';
            context.fillText('JS1024',199,1e3)*/

            // set background color
            context.globalCompositeOperation = 'source-over';
            if (frame)
                context.fillStyle = `hsl(240,30%,${brightness -= 3}%,.1`;

            // rain sound
            ++frame % 60 || zzfx();

            if (sky.width != innerWidth || sky.height != innerHeight) {
                sky.width = innerWidth;
                sky.height = innerHeight;
            }

            // fill background
            context.fillRect(0, 0, sky.width, sky.height);

            // draw rain
            context.rotate(-.1);
            for (i = 2e3; i--; context.fillStyle = '#fff5')
                context.fillRect(Math.sin(i * i) * sky.width + sky.width / 2, (2e3 + i) / 2 * (frame / 60 + 9) % (sky.height * 2), Math.sin(i), i % 9 - 40);
            context.rotate(.1);

            // lightning
            context.globalCompositeOperation = 'screen';
            context.fillStyle = '#8bf5';
            if (mouseX || rand() < .004 && brightness < 0) {
                brightness = 80 + rand(20);
                lightning(mouseX || rand(sky.width), 0, 0, rand(19) + 9);
                zzfx(1);
                mouseX = 0;
            }

            onmousedown = e =>{
                if(e.target.className == 'sky'
                || e.target.className == 'waves'
                || e.target.className == 'darkWaves'
                || e.target.className == 'intro'
                || e.target.id == 'drip'
                ){
                    mouseX = e.x;
                }
            }
        },
            16); // 60 fps updat

    }, [])
    return (
        <>
            <canvas ref={skyCanvas}
            className='sky'
                width={ratio[0]}
                height={ratio[1]}
                style={{ position: 'absolute', top: '0' }}
            ></canvas>
        </>
    )
}

export default Sky