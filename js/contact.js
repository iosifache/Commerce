$(document).ready(function() {
$( "button[type='submit']").click(function() {

var nume1=$("#Nume").val();  //ia numele
var email1=$("#Email").val();
var subiect1=$("#Subiect").val();
var mesaj1=$("textarea[name='Mesaj']").val();

if( verifica_email() == false){
				$.ajax({
			        type: "POST",
			        url: "js/trimiteemail.php",
			        data: { nume:nume1, email:email1, subiect:subiect1, mesaj:mesaj1 }
			      		
			    }).done(function( msg ) {
			  //  alert( "Data Saved: " + msg );
					$("form").html("<h1>Trimitere reusita</h1>");
			          
			        });

}


}); //de la click


function verifica_email(){ 
hasError = false;
  var ultimul_span='';
   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       var emailaddressVal = $("#Email").val();
     $("span.error").remove();
        if(emailaddressVal == '') {
                     $("#Email").after('<span class="error">Trebuie introdusa adresa de email</span>');
                        hasError = true;
        }
        else if(!emailReg.test(emailaddressVal)) {
                       $("#Email").after('<span class="error">Adresa de email nu este buna</span>');
                  
            hasError = true;
        } 
      

return hasError;    
 } 




}); // de la document ready










