$(document).ready(function() {
  

  
  $( "div.text-center form input[type='button']").click(function() {  //adauga evenimentul de click pe button
  
       var em=$('#email').val(); //se ia adresa de email
         $("#rezultat").empty(); // se goloseste continutul divului rezultat deoarece la o noua apasare a butonului e posibil sa avem erori. 
         //Am ales sa poti inregistra mai multe emailuri pe rand in baza de date
     if( verifica_email() == false)
     		{ //fals inseamna ca nu are erori
   

			          $.ajax({
			        type: "POST",
			        url: "js/getdata.php",
			        data: { email:em }
			        }).done(function( msg ) {
			   // alert( "Data Saved: " + msg );
					$("#rezultat").html("<h1>Inregistrare reusita</h1");
			          
			        });

			 }
  
});



function verifica_email(){
hasError = false;
  var ultimul_span='';
   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       var emailaddressVal = $("#email").val();
     $("span.error").remove();
        if(emailaddressVal == '') {
                     $("#email").after('<span class="error">Trebuie introdusa adresa de email</span>');
                     // adauga un span cu clasa error in care se da un mesaj
                        hasError = true;
        }
        else if(!emailReg.test(emailaddressVal)) {
                       $("#email").after('<span class="error">Adresa de email nu este buna</span>');
                  
            hasError = true;
        } 
      

return hasError;    
 } 


});

