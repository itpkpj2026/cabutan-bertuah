const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";





function submitAttendance(){


let nama =
document.getElementById("nama").value;


let telefon =
document.getElementById("telefon").value;



if(
nama==""
||
telefon==""
){

alert(
"Sila lengkapkan maklumat"
);

return;

}




fetch(

API+
"?action=register&nama="
+
encodeURIComponent(nama)
+
"&telefon="
+
encodeURIComponent(telefon)

)



.then(res=>res.json())


.then(data=>{


document
.getElementById("result")
.innerHTML=

`

<h3>
✅ KEHADIRAN BERJAYA
</h3>

<p>
${nama}
</p>

<p>
Sila tunggu pengesahan staff
</p>

`;


document.getElementById("nama").value="";

document.getElementById("telefon").value="";



});



}
