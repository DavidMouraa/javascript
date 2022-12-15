var date = new Date();
var hours = 13;

var p = document.querySelector('#hours');
var img = document.querySelector('#img-time');

p.innerHTML = `Agora são ${hours} horas`;

if (hours < 12)
{
    img.src = 'imagens/time-morning.jpg';
    document.body.style.backgroundColor = '#f0ab5c';
}
else if (hours < 18)
{
    img.src = 'imagens/time-afternoon.jpg';
    document.body.style.backgroundColor = '#ecd137';
}
else
{
    img.src = 'imagens/time-night.jpg';
    document.body.style.backgroundColor = '#3d3921';
}
