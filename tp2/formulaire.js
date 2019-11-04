
function Validation() {
    var date = document.getElementById('birthday').value; //selection d un seul elmt  
    var error = '';
    //element html
    //ou
    //document.querySelector('#birthday').value;
    //(selecteur css)  
    //selection d'un seul element
    var list = document.querySelectorAll('input');
    list.forEach(function (inputItem) { //une boucle foreach
        if (inputItem.value.length < 5) {
            var id = inputItem.id;
            var label = document.querySelector("[for='"+id+"']").textContent
            error += label + ' vide <br/>';
        }
    });

    if(error != ''){
        document.getElementById('error').innerHTML = error;
    }
}