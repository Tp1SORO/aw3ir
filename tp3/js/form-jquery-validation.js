$(document).ready(function () {
   
    // interception du "submit" du formulaire
    $("form").on("submit", function (event) {
        event.preventDefault();
        var error = "";
        // votre code de vérification du formulaire
        if ($("#name").val().length < 5) {
            error += "nom, ";
        }
        if ($("#firstname").val().length < 5) {
            error += "prénom, ";
        }
        if ($("#adresse").val().length < 5) {
            error += "adresse, ";
    }
   


        if (error == "") {
            $(".modal-body").html("Bienvenue " + $("#name").val());
        } else {
            $(".modal-body").html(error + " obligatoire");
        }
        if (error == "") {
            $(".modal-body").html("Bienvenue " + $("#firstname").val());
        } else {
            $(".modal-body").html(error + " obligatoire");
        
        }
        if (error == "") {
            $(".modal-body").html("Bienvenue " + $("#adresse").val());
        } else {
            $(".modal-body").html(error + " obligatoire");
        
        }
       
     
    


        $('#myModal').modal("show");

     

    });
    
});