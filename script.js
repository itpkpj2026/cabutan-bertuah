const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";



let cabutan=1;



function loadStats(){


fetch(API+"?action=stats")

.then(r=>r.json())

.then(data=>{


document
.getElementById("peserta")
.innerHTML=data.total;


document
.getElementById("hadir")
.innerHTML=data.hadir;


});


}



function startDraw(){


let box=
document.getElementById("winner");


let count=3;



let timer=setInterval(()=>{


box.innerHTML=count;


count--;


if(count<0){


clearInterval(timer);


spin();


}


},1000);


}




function spin(){


let box=
document.getElementById("winner");



let i=0;


let anim=setInterval(()=>{


box.innerHTML=
"MEMILIH...";


i++;


if(i>30){


clearInterval(anim);


getWinner();


}



},100);



}




function getWinner(){



fetch(API+"?action=winner")

.then(r=>r.json())

.then(data=>{


document
.getElementById("winner")
.innerHTML=
data.nama;



document
.getElementById("hadiah")
.innerHTML=
data.hadiah;



loadList();


confetti();


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

<td>${data[i][2]}</td>

<td>${data[i][3]}</td>


</tr>

`;

}



document
.getElementById("list")
.innerHTML=html;



});


}





function confetti(){


document.body.classList.add(
"winner-animation"
);


setTimeout(()=>{

document.body.classList.remove(
"winner-animation"
);

},3000);


}





setInterval(loadStats,5000);

loadStats();

loadList();
