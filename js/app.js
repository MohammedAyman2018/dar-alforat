window.onload = function (){
    Animate();    
    ScrollOut();
}

var collapseBtn = document.getElementById('toggle'),
    collapseDiv = document.getElementById('collapseable'),
    nav = document.querySelector('nav'),

    navLinks = document.querySelectorAll('nav .links ul li a:not(.active) , nav i');

window.onscroll = function () {
    if (window.scrollY <= 100) {
        navLinks.forEach(link => {
            link.style.color = "white";
        });

        move(nav)
            .set('background', 'transparent')
            .duration('0.7s')
            .end();

        if (screen.width <= 640) {
            move(collapseDiv)
                .set('background', 'black')
                .duration('0.7s')
                .end()
        } else {
            move(collapseDiv)
                .set('background', 'transparent')
                .duration('0.7s')
                .end()
        }

    } else {
        navLinks.forEach(link => {
            link.style.color = "black";
        });
        move(nav)
            .set('background', '#E7E8EA')
            .duration('0.7s')
            .end();
        move(collapseDiv)
            .set('background', '#E7E8EA')
            .duration('0.7s')
            .end()
    }
}


collapseBtn.onclick = function () {
    console.log();
    if (collapseDiv.style.transform !== 'translateX(0px)')
        move(collapseDiv)
        .x(0)
        .set('background', 'black')
        .duration('0.7s')
        .end();
    else
        move(collapseDiv)
        .x(-screen.width)
        .set('background', 'transparent')
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