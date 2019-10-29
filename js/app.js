
window.onload = function (){
    Animate();    
    ScrollOut();
}

var collapseBtn = document.getElementById('toggle'),
    collapseDiv = document.getElementById('collapseable');

collapseBtn.onclick = function (){
    console.log(collapseDiv.offsetWidth )
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
                .duration(1000)
                .delay(1000)
    .end();
}