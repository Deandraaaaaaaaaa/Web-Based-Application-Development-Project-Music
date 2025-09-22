let $slider = $('#slider');
let $container = $('#img-container'); 
let $slides = $('.image'); 

let imgWidth = $slides.width();
let imgHeight = $slides.height();
let imgCount = $slides.length
let totalWidth = imgWidth * imgCount

$slider.css({
    width: imgWidth, 
    height: imgHeight,
})

$container.css({
    width:totalWidth,
    marginLeft: - imgWidth
})

$('#prev').on('click', function () {
    $container.animate({
        left: + imgWidth
    }, 'slow',() => {
        $('.image:last-child').prependTo($container)
        $container.css('left', 0);
    })
})

$('#next').on('click', function () {
    $container.animate({
        left: - imgWidth
    }, 'slow',() => {
        $('.image:first-child').appendTo($container)
        $container.css('left', 0);
    })
})


