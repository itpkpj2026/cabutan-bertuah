// =====================================
// CABUTAN BERTUAH PKPJ
// FINAL SCRIPT
// =====================================


// MASUKKAN URL APPS SCRIPT ANDA

const API =
"https://script.google.com/macros/s/URL_ANDA/exec";





// =====================================
// LOAD DATA DASHBOARD
// =====================================


function loadStats(){


fetch(API+"?action=stats")


.then(res=>res.json())


.then(data=>{


document
.getElementById("peserta")
.innerHTML =
data.total;



document
.getElementById("hadir")
.innerHTML =
data.hadir;



let cabutan =
data.cabutan;



if(cabutan<1){

cabutan=1;

}



document
.getElementById("cabutan")
.innerHTML =
cabutan+" / 20";



});


}







// =====================================
// START CABUTAN
// =====================================


function startDraw(){


let count = 3;


let countdown =
document.getElementById("countdown");



let timer =
setInterval(()=>{


countdown.innerHTML=count;


count--;



if(count<0){


clearInterval(timer);


countdown.innerHTML="";


spinName();


}


},1000);



}








// =====================================
// ANIMASI NAMA
// =====================================


function spinName(){



let box =
document.getElementById("winner");



let names=[

"MEMILIH",

".....",

".....",

"....."

];



let i=0;



let animation =
setInterval(()=>{


box.innerHTML =
names[
Math.floor(
Math.random()*names.length
)
];



i++;



if(i>30){


clearInterval(animation);


getWinner();


}



},100);




}









// =====================================
// DAPAT PEMENANG
// =====================================


function getWinner(){



fetch(API+"?action=winner")


.then(res=>res.json())


.then(data=>{



if(data.error){


alert(data.error);

return;


}




document
.getElementById("winner")
.innerHTML =
data.nama;



document
.getElementById("hadiah")
.innerHTML =
"🎁 "+data.hadiah;



document
.getElementById("cabutan")
.innerHTML =
data.cabutan+" / 20";





loadList();

loadStats();



});



}









// =====================================
// LIST PEMENANG
// =====================================


function loadList(){



fetch(API+"?action=list")


.then(res=>res.json())


.then(data=>{



let html="";



for(let i=1;i<data.length;i++){



html += `

<tr>

<td>
${data[i][0]}
</td>


<td>
${data[i][1]}
</td>


<td>
${data[i][3]}
</td>


<td>
${formatDate(data[i][4])}
</td>


</tr>

`;



}



document
.getElementById("list")
.innerHTML =
html;



});



}









// =====================================
// FORMAT TARIKH
// =====================================


function formatDate(date){


if(!date){

return "-";

}


return new Date(date)
.toLocaleString();



}










// =====================================
// RESET SEMUA
// =====================================


function resetAll(){



let confirmBox =

confirm(
"Reset semua cabutan?"
);



if(!confirmBox){

return;

}



fetch(
API+"?action=reset"
)


.then(res=>res.json())


.then(data=>{


alert(data.status);



document
.getElementById("winner")
.innerHTML =
"SEDIA UNTUK CABUTAN";



document
.getElementById("hadiah")
.innerHTML =
"SEDIA";



document
.getElementById("cabutan")
.innerHTML =
"20 / 20";



document
.getElementById("list")
.innerHTML =
"";



loadStats();



});



}









// =====================================
// FULLSCREEN
// =====================================


function fullscreenMode(){



document
.documentElement
.requestFullscreen();



}









// AUTO REFRESH


setInterval(
loadStats,
5000
);



loadStats();

loadList();
