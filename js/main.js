
$('.ui.progress').progress();

$('.ui.sticky')
    .sticky({
        context: '#context',
        pushing: true
    })
;

// Transitions
$('.terminal.icon')
    .transition('set looping', '8000ms')
    .transition({
        animation: 'flash',
        duration: '8000ms'
    });

$('#sticky-menu')
    .transition('zoom in', '5000ms')
;

