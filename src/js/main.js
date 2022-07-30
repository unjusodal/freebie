function parallax() {
    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image, {
        scale: 1.5, 
        overflow: true
    });
}
function parallaxMax() {
    var image = document.getElementsByClassName('parallax-max');
    new simpleParallax(image, {
        scale: 1.9, 
        overflow: true
    });
}
function parallaxHorizontal() {
    var image = document.getElementsByClassName('parallax-horizontal');
    new simpleParallax(image, {
        scale: 1.6, 
        overflow: true,
        orientation: 'right'
    });
}

parallax()
parallaxMax()
parallaxHorizontal()
