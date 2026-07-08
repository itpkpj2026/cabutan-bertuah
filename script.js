const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";




// LOAD DASHBOARD

function loadStats(){


fetch(API+"?action=stats")

.then(r=>r.json())

.then(data=>{


document.getElementById("peserta").innerHTML=data.total;


document.getElementById("hadir").innerHTML=data.hadir;


document.getElementById("cabutan").innerHTML=
data.cabutan+" / 20";


});

}




// START DRAW


function startDraw(){


let count=3;


let cd=document.getElementById("countdown");



let timer=setInterval(()=>{


cd.innerHTML=count;


count--;


if(count<0){


clearInterval(timer);

cd.innerHTML="";


spin();


}


},1000);


}






function spin(){


let box=
document.getElementById("winner");



let anim=setInterval(()=>{


box.innerHTML=
"MEMILIH...";



},100);



setTimeout(()=>{


clearInterval(anim);

getWinner();


},3000);


}








function getWinner(){


fetch(API+"?action=winner")

.then(r=>r.json())

.then(data=>{


if(data.error){

alert(data.error);

return;

}



document
.getElementById("winner")
.innerHTML=data.nama;



document
.getElementById("hadiah")
.innerHTML=
"🎁 "+data.hadiah;



document
.getElementById("cabutan")
.innerHTML=
data.cabutan+" / 20";



loadStats();

loadList();



});


}







function loadList(){


fetch(API+"?action=list")

.then(r=>r.json())

.then(data=>{


let html="";



for(let i=1;i<data.length;i++){



html+=`

<tr>

<td>${data[i][0]}</td>

<td>${data[i][1]}</td>

<td>${data[i][3]}</td>

<td>${new Date(data[i][4]).toLocaleString()}</td>

</tr>


`;

}


document.getElementById("list").innerHTML=html;


});


}








function resetAll(){



if(!confirm(
"Reset semua cabutan?"
))

return;



fetch(API+"?action=reset")

.then(r=>r.json())

.then(data=>{


alert(data.status);



document.getElementById("winner")
.innerHTML=
"SEDIA UNTUK CABUTAN";


document.getElementById("hadiah")
.innerHTML=
"SEDIA";


document.getElementById("cabutan")
.innerHTML=
"20 / 20";



document.getElementById("list")
.innerHTML="";



loadStats();


});



}





function fullscreenMode(){


document.documentElement.requestFullscreen();


}





loadStats();

loadList();

setInterval(loadStats,5000);
