const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
   //Nossas variaveis e pegamos os valores das variaveis e datas de hoje//
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes(); 
    let seg = dateToday.getSeconds();
//Pegamos as variaveis que estão fora da funcão para receberem os valores das variaveis que estão dentro para fazem as horas contarem//
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
});