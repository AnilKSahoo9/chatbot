$( document ).ready(function() {
    console.log( "ready!" );
    $("input[type=checkbox][name=check]").click(function() {

        var bol = $("input[type=checkbox][name=check]:checked").length >= 3;    
        $("input[type=checkbox][name=check]").not(":checked").prop("disabled",bol);
    
    });
});

