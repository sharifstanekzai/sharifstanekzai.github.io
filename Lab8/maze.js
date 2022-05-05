var started = false;
$(document).ready(function () {
    $('#start').on('click', startMaze);
    $('#end').on('mouseover', endMaze);
    $('.boundary').on('mouseover', touchBoundary);
});

function startMaze(e) {
    if (!started) {
        $('.youlose').removeClass('youlose');
        $('.youwin').removeClass('youwin');
        $('#status').text('Started');
        started = true;
    }
}
function endMaze(e) {
    if (started) {
        started = false;
        if (e.originalEvent.layerX === 0) {
            $('.boundary').addClass('youwin');
            $('#status').text('You won :)');
        }
        else {
            $('.boundary').addClass('youlose');
            $('#status').text('You lose :(');
        }
    }

}
function touchBoundary() {
    if (started) {
        $('.boundary').addClass('youlose');
        $('#status').text('You lose :(');
        started = false;
    }

}