$(document).ready(function() {

    $('#Adicionar1').click(function() {
        $('#list1').append("<tr><td>"+ $("#Texto1").val() + "</td><td><button name='remover' class='btn btn-danger'>remover</button><button name='mover1' class='btn btn-primary'>mover</button></td></tr>");
$("#Texto1").val("");        
    });
	
	$('#Adicionar2').click(function() {
        $('#list2').append("<tr><td>"+ $("#Texto2").val() +"</td><td><button name='remover' class='btn btn-danger'>remover</button><button name='mover2' class='btn btn-primary'>mover</button></td></tr>");
$("#Texto2").val("");        
    });

    $(document).on("click", "button[name='remover']" , function() {

        $(this).parent().parent().remove();

    });
    
    $(document).on("click", "button[name='mover1']" , function() {
        $(this).attr('name','mover2').parent().parent().appendTo('#list2');

    });    
    $(document).on("click", "button[name='mover2']" , function() {
        $(this).attr('name','mover1').parent().parent().appendTo('#list1');

    });    

});