const turnOn = document.getElementById( 'btn-on' );
const turnOff = document.getElementById( 'btn-off' );
const lamp = document.getElementById( 'lamp' );


function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}


function lampOn (){
    if( ! isLampBroken () ){
    lamp.src = './Img/ligada.jpg';
}
}

function lampoff(){
    if(! isLampBroken () ){
    lamp.src = './Img/desligada.jpg';
}
}

function dblclick(){
    lamp.src = './Img/quebrada.jpg';
}

turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ('click', lampoff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampoff)
lamp.addEventListener('dblclick', dblclick)
lamp.addEventListener('click', lampoff)







