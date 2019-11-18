
function validation() {
   var nomValue = document.querySelector("#nom").value;
   var prenomValue = document.querySelector("#prenom").value;
   var dateValue = document.querySelector("#datedenaissance").value;
   var adresseValue = document.querySelector("#adresse").value;
   var emailValue = document.querySelector("#email").value;

   if (nomValue.length == 0) {

      document.querySelector("#error").textContent = "le champ nom est vide ";
      document.querySelector("#resultat").textContent = "";
   }
   else
      if (nomValue.length < 5) {
         document.querySelector("#error").textContent = "le nom doit contenir au moins 5 caractères ";
         document.querySelector("#resultat").textContent = "";
      }
      else
         if (prenomValue.length == 0) {
            document.querySelector("#error").textContent = "le champ prenom est vide ";
            document.querySelector("#resultat").textContent = "";
         }
         else
            if (prenomValue.length < 5) {
               document.querySelector("#error").textContent = "le prenom doit contenir au moins 5 caractères ";
               document.querySelector("#resultat").textContent = "";
            }
            else
               if (dateValue.length == 0) {
                  document.querySelector("#error").textContent = "le champ date est vide ";
                  document.querySelector("#resultat").textContent = "";
               }
               else
                  if (adresseValue.length == 0) {
                     document.querySelector("#error").textContent = "le champ Adresse  est vide ";
                     document.querySelector("#resultat").textContent = "";
                  }
                  else
                     if (adresseValue.length < 5) {
                        document.querySelector("#error").textContent = " Adresse doit contenir au moins 5 caractères ";
                        document.querySelector("#resultat").textContent = "";
                     }
                     else
                        if (emailValue.length == 0) {
                           document.querySelector("#error").textContent = "le champ Email  est vide ";
                           document.querySelector("#resultat").textContent = "";
                        }
                        else
                           if (emailValue.length < 5) {
                              document.querySelector("#error").textContent = "Email doit contenir au moins 5 caractères ";
                              document.querySelector("#resultat").textContent = "";
                           }
                           else
                              if (nomValue.length >= 5
                                 && prenomValue.length >= 5
                                 && dateValue.length !== 0
                                 && adresseValue.length >= 5
                                 && emailValue.length >= 5) {
                                 document.querySelector("#resultat").textContent = "bienvenue" + " " + document.querySelector("#nom").value;
                                 document.querySelector("#error").textContent = "";
                              }

}