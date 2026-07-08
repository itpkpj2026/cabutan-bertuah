const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";



function loadAttendance(){


fetch(
API+"?action=attendance"
)


.then(res=>res.json())


.then(data=>{


let html="";



for(let i=1;i<data.length;i++){



html += `

<tr>

<td>
${data[i][1]}
</td>


<td>
${data[i][2]}
</td>


<td>
${data[i][3]}
</td>


<td>


<button onclick="approve(${i+1})">

SAHKAN

</button>


</td>


</tr>

`;

}


document
.getElementById("attendance")
.innerHTML=html;


});


}






function approve(row){



fetch(
API+
"?action=approve&row="+row
)


.then(res=>res.json())


.then(data=>{


alert(data.status);


loadAttendance();


});


}




loadAttendance();


setInterval(
loadAttendance,
5000
);
