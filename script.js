// =======================================
// CABUTAN BERTUAH PKPJ
// FINAL JAVASCRIPT
// =======================================


const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";



let cabutanSemasa = 1;





// ===============================
// LOAD STATISTIK
// ===============================


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



document
.getElementById("cabutan")
.innerHTML =
(data.menang + 1)
+
" / 20";



});



}





// ===============================
// START CABUTAN
// ===============================


function startDraw(){


let countdown =
document.getElementById("countdown");


let winner =
document.getElementById("winner");



let hadiah =
document.getElementById("hadiah");



let drum =
document.getElementById("drumroll");



if(drum){

drum.play();

}



let count=3;



let timer=setInterval(()=>{


countdown.innerHTML=count;



count--;



if(count<0){


clearInterval(timer);


countdown.innerHTML="";


spinWinner();



}



},1000);



}





// ===============================
// ANIMATION NAMA
// ===============================


function spinWinner(){



let box =
document.getElementById("winner");



let fake=[

"MEMILIH",

"ALI",

"AHMAD",

"NURUL HIDAYAH",

"MOHAMAD SYAFIQ",

"SITI NOR AZLINA"

];



let i=0;



let spin=setInterval(()=>{


box.innerHTML =
fake[
Math.floor(
Math.random()*fake.length
)
];



i++;



if(i>25){


clearInterval(spin);


getWinner();



}



},100);



}








// ===============================
// DAPAT PEMENANG
// ===============================


function getWinner(){


fetch(
API+"?action=winner"
)


.then(res=>res.json())


.then(data=>{


console.log(data);



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
data.hadiah;



document
.getElementById("cabutan")
.innerHTML =
data.bil + " / 20";



let sound =
document.getElementById(
"winnerSound"
);



if(sound){

sound.play();

}



confetti();



loadList();



});



}







// ===============================
// SENARAI PEMENANG
// ===============================


function loadList(){



fetch(
API+"?action=list"
)


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
${data[i][2]}
</td>


<td>
${new Date(data[i][3])
.toLocaleString()}
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








// ===============================
// RESET DISPLAY
// ===============================


function resetWinner(){


document
.getElementById("winner")
.innerHTML =
"SEDIA UNTUK CABUTAN";



document
.getElementById("hadiah")
.innerHTML =
"HADIAH UTAMA";


}





// ===============================
// FULLSCREEN
// ===============================


function fullscreenMode(){


if(
document.documentElement.requestFullscreen
){


document
.documentElement
.requestFullscreen();



}


}






// ===============================
// CONFETTI
// ===============================


function confetti(){



let canvas =
document.getElementById(
"confetti"
);



if(!canvas)return;



let ctx =
canvas.getContext("2d");



canvas.width =
window.innerWidth;



canvas.height =
window.innerHeight;



let particles=[];



for(let i=0;i<200;i++){


particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*8+2

});


}





function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach(p=>{


ctx.fillRect(
p.x,
p.y,
p.size,
p.size
);



p.y+=3;



if(p.y>canvas.height){

p.y=0;

}



});



requestAnimationFrame(animate);



}



animate();



}





// AUTO LOAD


setInterval(
loadStats,
5000
);


loadStats();

loadList();
