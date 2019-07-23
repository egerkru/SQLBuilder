//Clear all textareas when page loads
$(document).ready(function(){
    $('.textarea, .output').val('');
});


//Get data from input, insert to result and format as SQL
$("input[type='text'], textarea").keyup(function() {
    $("textarea").val('')
    var tev = '';
    var tev2 = '';
    var tev3 = '';
    $("#input").each(function() {
        tev += $("#input").val();
        tev2 += $("#field_names").val();
        tev3 += $("#values").val();
    });
    
    $("textarea").val("INSERT INTO "+tev+"("+tev2+") VALUES("+tev3+");");
});

//Clear all textareas when clicking clear
$( "#clear" ).click(function() {
    $('.textarea, .output').val('');
  });