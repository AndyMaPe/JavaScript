$(document).ready(function() {
    // el $  esta corriendo por medio de la libreria de JQUERY y entre (){} es lo que se mand a llamar 
   
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/50",
        contentType: "application/json",
        dataType: 'json',
        type:'get',
        success: function(result){
            console.log(result.title);//muesra el titulo solamente con el result.title
        },
        error: function (result) {
        console.log('La llamada no se pudo completar');
        console.log.apply(result);
        }
    });

});
