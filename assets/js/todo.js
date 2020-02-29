// alert('connected')

// to click on todo, it will strike it through and append color aof gray, then click again and it 
//remove the strike-through and color

// $('li').on('click', function(){
//     // alert('i clicked')
//     $(this).toggleClass('completed')// adds the completed class

    
        
//     })
$('ul').on('click', 'li', function(){ // we put an on click event ,and a third argument 'li' so it listens to
// any click event on the parent ul and any li in the future.
    // alert('i clicked')
    $(this).toggleClass('completed')// adds the completed class

    
        
    })

    // after a click event, the todos will fade out and be deleted. 
    // Note : always use onclick as opposed to click so it can listen for future events.
    $('ul').on('click', 'span', function(e){ // Here the third argument is span and the parent event is ul
        // alert(' x clicked')
        $(this).parent().fadeOut(1000, function(){
            $(this).remove() // this is to remove the parent <li> after it fades
        })
        event.stopPropagation(); // this is to prevent the event from bubbling up to other elements

    })


    // add a keypress event to the input field
    // $('input[type="text"]').on('keypress',function(){
    //     console.log('key pressed')
    // })
    
    $('input[type="text"]').keypress(function(e){
        // console.log('key pressed')
        if(e.which === 13){
            // console.log($(this).val())
            //grab the todo text from the input 
            let inputText = $(this).val();

            //append the li tag and the variable inputText to the parent element(ul)
            $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${inputText} </li>`)
            event.stopPropagation()
        }

    })

    $('.fa-plus').on('click', function(){
        // alert('you clicked me')
        $('input[type="text"]').fadeToggle()
    })
    