const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";





function loadAttendance(){


fetch(
API+"?action=attendance"
)


.then(res=>res.json())


.then(data=>{


let html="";


let jumlah=0;



for(let i=1;i<data.length;i++){


jumlah++;



let status =
data[i][3];



let button="";



if(status!="SAH"){


button = `

<button onclick="approve(${i+1})">

✅ SAHKAN

</button>

`;


}
else{


button="✔ SAH";


}






html += `

<tr>


<td>
${i}
</td>


<td>
${data[i][1]}
</td>


<td>
${data[i][2]}
</td>


<td>
${status}
</td>


<td>
${button}
</td>



</tr>

`;



}



document
.getElementById("jumlah")
.innerHTML =
jumlah;



document
.getElementById("attendance")
.innerHTML =
html;



})


.catch(error=>{


console.log(error);


});



}









function approve(row){



fetch(

API+
"?action=approve&row="+row

)


.then(res=>res.json())


.then(data=>{


alert(
data.status
);


loadAttendance();


});


}






loadAttendance();


setInterval(
loadAttendance,
5000
);
