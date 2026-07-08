
const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";


function startDraw(){


let box =
document.getElementById("winner");


let i=0;


let animation =
setInterval(function(){


box.innerHTML =
"MEMILIH...";


i++;


if(i>20){


clearInterval(animation);


fetch(
API+"?action=winner"
)


.then(response =>
response.json()
)


.then(data=>{


box.innerHTML =
data.nama;


});


}


},100);


}
