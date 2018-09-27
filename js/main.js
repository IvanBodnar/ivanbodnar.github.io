
$('.ui.progress').progress();

$('.terminal.icon')
    .transition('set looping', '8000ms')
    .transition({
        animation: 'flash',
        duration: '8000ms'
    });

$('.ui.sticky')
    .sticky({
        context: '#context',
        pushing: true
    })
;