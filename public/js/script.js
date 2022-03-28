var player;
var num = document.getElementsByClassName('num');

function submitPoints() {
    for (var i = 0; i < num.length; i++) {
         num[i].classList.add('disabled');
    }
    //let points = document.getElementById(player);
    //points.innerHTML = parseInt(points.innerHTML) + parseInt(document.dodaj.suma.value);
    document.dodaj.suma.value = 0;
    document.getElementById('first').style.background = "rgba(255,255,255,.5)";
    document.getElementById('second').style.background = "rgba(255,255,255,.5)";
    //document.getElementById("dodaj").submit();
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

function hide(ele) {
    let x = document.getElementById(ele);
    x.style.display = "none";
  }

  function show(ele) {
    let x = document.getElementById(ele);
    x.style.display = "flex";
  }

  function start(player1, player2){
    document.getElementById("name-first").innerHTML = player1;
    document.getElementById("name-second").innerHTML = player2;
    hide("names");
    show("table");
    show("panel");
  }
