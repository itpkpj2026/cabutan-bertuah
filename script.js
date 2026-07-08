
const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";



let count=1;



function startDraw(){


let box=document
.getElementById("winnerName");



let names=[

"AHMAD ALI",

"NURUL HIDAYAH",

"MOHD SYAFIQ",

"AINA BINTI AZMAN",

"HAZIQ RAHMAN"

];



let i=0;



let animation=setInterval(()=>{


box.innerHTML=
names[
Math.floor(Math.random()*names.length)
];


i++;



if(i>30){


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
.getElementById("winnerName")
.innerHTML=data.nama;



addWinner(data.nama);


});


}




function addWinner(nama){


let table=document
.getElementById("winnerList");



let row=`

<tr>

<td>
${count}
</td>

<td>
${nama}
</td>


<td>
Hadiah Utama
</td>


</tr>
`;



table.innerHTML+=row;


count++;


}




function resetWinner(){


document
.getElementById("winnerName")
.innerHTML=
"SEDIA UNTUK CABUTAN";


}
