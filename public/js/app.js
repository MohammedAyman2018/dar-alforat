window.onload = function (){
    Animate();    
    ScrollOut();
}

var collapseBtn = document.getElementById('toggle'),
    collapseDiv = document.getElementById('collapseable'),
    nav = document.querySelector('nav'),
    navLinks = document.querySelectorAll('nav .links ul li a:not(.active)'),
    toogle = document.querySelector('nav i');

collapseBtn.onclick = function () {
    console.log();
    if (collapseDiv.style.transform !== 'translateX(0px)')
        move(collapseDiv)
        .x(0)
        .set('background', '#E7E8EA')
        .duration('0.7s')
        .end();
    else
        move(collapseDiv)
        .x(-screen.width)
        .set('background', '#E7E8EA')
        .duration('0.7s')
        .end();
};

function Animate() {
    move('.overlay')
        .x(0)
        .duration(3000)
        .then()
            move('.preload')
                .x(4000)
                .duration(2000)
                .delay(1000)
    .end();
}