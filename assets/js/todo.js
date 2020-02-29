// alert('connected')

// to click on todo, it will strike it through and append color aof gray, then click again and it 
//remove the strike-through and color

$('li').on('click', function(){
    // alert('i clicked')
    $(this).toggleClass('completed')// adds the completed class

    
        
    })

    // after a click event, the todos will fade out and be deleted
    $('span').click(function(e){
        // alert(' x clicked')
        $(this).parent().fadeOut(1000, function(){
            $(this).remove() // this is to remove the parent <li> after it fades
        })
        event.stopPropagation(); // this is to prevent the event from bubbling up to other elements

    })
    