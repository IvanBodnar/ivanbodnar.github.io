
$('.ui.progress').progress();

$('.ui.sticky')
    .sticky({
        context: '#context'
    })
;

$('.ui.dropdown.item').dropdown();

// Transitions
$('.terminal.icon')
    .transition('set looping', '8000ms')
    .transition({
        animation: 'flash',
        duration: '8000ms'
    });

$('#sticky-menu')
    .transition('fade in', '11000ms')
;

