window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = "hanging";
    ctx.fillText('Ура, вы победили!', 130, 40);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = "hanging";
    ctx.fillText('Список результатов:', 130, 60)


    var max = -1;
    var maxIndex = -1;

    for (var i = 0 ; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    }

    var max = Math.max.apply(Math, times);
    var histogramHeight = 150;
    var step = histogramHeight / max;

    var histogramWidth = 40;
    var indent = 50;
    var initialX = 150;
    var initialY = 250;

    ctx.textBaseline = 'top';



    var randomColor = function(name) {

        var name = names[i];

        if (name == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
        }

        else {
            ctx.fillStyle = 'rgba(0, 0, 255, '+ Math.random()+')';
        }
    }

    for (var i = 0; i < times.length; i++) {

        randomColor(name);
        ctx.fillRect(initialX + (histogramWidth+indent) * i, initialY, histogramWidth, - times[i] * step);

        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(parseInt(times[i]), initialX + (histogramWidth+indent) * i, initialY - histogramHeight - 20 );
        ctx.fillText(names[i], initialX + (histogramWidth+indent) * i, initialY + 5 );
    }
};