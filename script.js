var player;
var num = document.getElementsByClassName('num');
function disableForm() {
    for (var i = 0; i < num.length; i++) {
         num[i].classList.add('disabled');
    }
    let points = document.getElementById(player);
    points.innerHTML = parseInt(points.innerHTML) + parseInt(document.dodaj.suma.value);
    document.dodaj.suma.value = 0;
    document.getElementById('first').style.background = "rgba(255,255,255,.5)";
    document.getElementById('second').style.background = "rgba(255,255,255,.5)";
}

function enableForm(pla){
    player = pla;
    for (var i = 0; i < num.length; i++) {
         num[i].classList.remove('disabled');
         num[i].style.pointerEvents = 'auto';
    }
    switch(pla){
        case 'points-first':
            document.getElementById('first').style.background = "rgba(0,255,0,.5)";
            document.getElementById('second').style.background = "rgba(255,255,255,.5)";
            break;
        case 'points-second':
            document.getElementById('second').style.background = "rgba(0,255,0,.5)";
            document.getElementById('first').style.background = "rgba(255,255,255,.5)";
            break;
    }
} 