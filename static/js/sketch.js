function BlockSketch(canvasId, params) {
    let canvas, ctx;
    let w, h;

    function debounced(f, delay) {
        var timeoutId = setTimeout(f, delay);
        return function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(f, delay);
        }
    }

    function getFillColor(){
        let fillIndex = Math.floor(Math.random() * params.fillColors.length);
        return params.fillColors[fillIndex];
    }

    function draw() {
        canvas = document.getElementById(canvasId);
        ctx = canvas.getContext('2d');
        w = canvas.width;
        h = canvas.height;

        drawBars()
        canvas.addEventListener("mousemove", debounced(drawBars, 5));
    }

    function drawBars(){
        for(let j=0; j < w; j += params.strokeWidth + params.whitespace) {
            for(let i=0; i < h; i += params.strokeHeight) {
                ctx.beginPath()
                ctx.fillStyle = getFillColor();
                ctx.fillRect(j, i, params.strokeWidth, params.strokeHeight);
            }
        }
    }

    draw();

    return {
        draw,
    };
}