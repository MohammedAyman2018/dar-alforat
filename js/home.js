if (window.scrollY <= 100) {
    move(nav)
        .set('background', 'transparent')
        .duration('0.7s')
        .end();

    navLinks.forEach(link => {
        move(link).set('color', 'white').duration('0.4s').end();
    });
} else {
    move(nav)
        .set('background', '#E7E8EA')
        .duration('0.7s')
        .end();

    navLinks.forEach(link => {
        move(link).set('color', 'black').duration('0.4s').end();
    });
}

window.onscroll = function () {
    if (screen.width <= 640) {
        if (window.scrollY <= 100) {
            move(nav)
                .set('background', 'transparent')
                .duration('0.7s')
                .end();


            move(collapseDiv)
                .set('background', '#E7E8EA')
                .duration('0.7s')
                .end();

            move(toogle).set('color', 'white').duration('0.4s').end();
            navLinks.forEach(link => {
                move(link).set('color', 'black').duration('0.4s').end();
            });
        } else {
            move(nav)
                .set('background', '#E7E8EA')
                .duration('0.7s')
                .end();

            move(toogle).set('color', 'black').duration('0.4s').end();
        }
    } else {
        if (window.scrollY <= 100) {
            move(nav)
                .set('background', 'transparent')
                .duration('0.7s')
                .end();

            navLinks.forEach(link => {
                move(link).set('color', 'white').duration('0.4s').end();
            });
        } else {
            move(nav)
                .set('background', '#E7E8EA')
                .duration('0.7s')
                .end();

            navLinks.forEach(link => {
                move(link).set('color', 'black').duration('0.4s').end();
            });
        }
    }
};