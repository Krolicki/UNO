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
    
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    let fourth = document.getElementById('fourth');
    let playerField = document.getElementById('player');
    
    switch(pla){

        
        case 'points-first':
            first.style.background = "rgba(0,255,0,.5)";
            second.style.background = "rgba(255,255,255,.5)";
            third.style.background = "rgba(255,255,255,.5)";
            fourth.style.background = "rgba(255,255,255,.5)";
            playerField.value = 'p1';
            break;
        case 'points-second':
            first.style.background = "rgba(255,255,255,.5)";
            second.style.background = "rgba(0,255,0,.5)";
            third.style.background = "rgba(255,255,255,.5)";
            fourth.style.background = "rgba(255,255,255,.5)";
            playerField.value = 'p2';
            break;
        case 'points-third':
            first.style.background = "rgba(255,255,255,.5)";
            second.style.background = "rgba(255,255,255,.5)";
            third.style.background = "rgba(0,255,0,.5)";
            fourth.style.background = "rgba(255,255,255,.5)";
            playerField.value = 'p3';
            break;
        case 'points-fourth':
            first.style.background = "rgba(255,255,255,.5)";
            second.style.background = "rgba(255,255,255,.5)";
            third.style.background = "rgba(255,255,255,.5)";
            fourth.style.background = "rgba(0,255,0,.5)";
            playerField.value = 'p4';
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

function setRequired(ele, yesno){
    let x = document.getElementById(ele);
    if(yesno)
        x.setAttribute("required", "");
    else
        x.removeAttribute("required");
}

function updateTextInput(val){
    document.getElementById('ilGr').value=val;
    switch(val){
        case '2':
            slideOut('p3');
            slideOut("p4");
            setRequired("p3", false);
            setRequired("p4", false);
            break;
        case '3':
            slideIn('p3');
            slideOut('p4');
            setRequired("p4", false);
            setRequired("p3", true);
            break;
        case '4':
            slideIn("p3");
            slideIn("p4");
            setRequired("p3", true);
            setRequired("p4", true);
            break;
        default:
            break;
    }
}

function confirmEnd(){
     if(confirm('Zakończyć grę?')){
         return true;
    }
    else{
        event.stopPropagation(); 
        event.preventDefault();
    };
}

function slideOut(ele){ 
    let x = document.getElementById(ele);
    x.classList.remove('slideIn');
    x.classList.add('slideOut');
}

function slideIn(ele){ 
    let x = document.getElementById(ele);
    x.classList.remove('slideOut');
    x.classList.add('slideIn');
}

function checkRequired(){
    console.log("sss");
    let p3req = document.getElementById("p3");
    let p4req = document.getElementById("p4");
    console.log(p3req.required);
    if(!p3req.required)
        p3req.value = "";
    if(!p4req.required)
        p4req.value = "";
}
