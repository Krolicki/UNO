var player;
var num = document.getElementsByClassName('num');

function submitPoints() {
    event.preventDefault();
    for (var i = 0; i < num.length; i++) {
         num[i].classList.add('disabled');
    }
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
            document.getElementById('player').value = 'p1';
            break;
        case 'points-second':
            document.getElementById('second').style.background = "rgba(0,255,0,.5)";
            document.getElementById('first').style.background = "rgba(255,255,255,.5)";
            document.getElementById('player').value = 'p2';
            break;
    }
} 

function sum(toAdd){
    document.dodaj.suma.value = parseInt(dodaj.suma.value) + toAdd;
}

function clearPoints(){
    document.dodaj.suma.value = 0;
}

function hide(ele){
    let x = document.getElementById(ele);
    x.style.display = 'none';
}
function show(ele){
    let x = document.getElementById(ele);
    x.style.display = 'block';
}

function updateTextInput(val){
    document.getElementById('ilGr').value=val;
    switch(val){
        case '2':
            hide("p3");
            hide("p4");
            break;
        case '3':
            hide("p4");
            show("p3");
            break;
        case '4':
            show("p3")
            show("p4");
            break;
        default:
            break;
    }
}
