const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";



let cabutan=1;



function startDraw(){


let box =
document.getElementById("winner");


let hadiahBox =
document.getElementById("hadiah");



let count=3;



let timer=setInterval(()=>{


box.innerHTML=count;


count--;


if(count<0){


clearInterval(timer);


animateName();


}


},1000);



}





function animateName(){


let box =
document.getElementById("winner");


let i=0;


let animation =
setInterval(()=>{


box.innerHTML=
"MEMILIH...";


i++;



if(i>25){


clearInterval(animation);


getWinner();


}


},100);


}





function getWinner(){



fetch(
API+"?action=winner"
)



.then(res=>res.json())

.then(data=>{


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
data.bil+" / 20";



loadList();


});



}






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





function resetWinner(){


document
.getElementById("winner")
.innerHTML=
"SEDIA UNTUK CABUTAN";


}
