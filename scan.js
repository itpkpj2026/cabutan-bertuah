// =================================
// PKPJ ATTENDANCE
// FINAL JAVASCRIPT
// =================================



const API =
"https://script.google.com/macros/s/AKfycbzx6sjPqXvi3nTVjra-hpoDZJ4DU9mEzsfMxF-Q38Gp0Y_Wb2NzXWiwuKzzfuTc9Jk/exec";






function submitAttendance(){



let nama =
document
.getElementById("nama")
.value
.trim();



let telefon =
document
.getElementById("telefon")
.value
.trim();






if(nama=="" || telefon==""){


alert(
"Sila lengkapkan maklumat"
);


return;


}







let button =
document.querySelector("button");



button.innerHTML =
"⏳ Menghantar...";



button.disabled=true;







fetch(

API+

"?action=register"

+

"&nama="

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
.querySelector(".attendance-card")
.innerHTML = `



<div class="success-icon">

✅

</div>



<div class="success-title">

KEHADIRAN BERJAYA DIREKODKAN

</div>



<br>


<div class="success-text">

Terima kasih.

</div>



`;





})







.catch(error=>{



console.log(error);



alert(

"Ralat sambungan. Sila cuba lagi."

);



button.innerHTML =

"HANTAR KEHADIRAN";



button.disabled=false;



});



}
