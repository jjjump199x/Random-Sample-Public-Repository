$(document).ready(function() {

    var eventsCont, dialog;
    var sub = $("#subject-input");
    var slot = $("#slot-input");
    var tint = $('#event-color-input');
    var errorForm = $("#form-error");
    var currentSlot = false;

    dialog = $("#dialog").dialog( {
        autoOpen: false, 
        modal: true,
        close: function() {
            $('#form-error').text('');
            sub.val('');
            $("#slot-input").prop("disabled", false);
        }
    });

    $('td').click(function() {
        eventsCont = $(this).find('.events');
        if ($(eventsCont).children().length < 2) {
            dialog.dialog({
                title: "Add Event",
                buttons: {
                    Done: done
                }
            })
            dialog.dialog("open");
        }
    });

    function done() {
        formValidation(eventsCont);
    }

    function formValidation(eventsCont) {
        current_slot = slotValidation(eventsCont);

        if (sub.val() == '') {
            errorForm.text('The subject is empty. Please fill in.');
        }
        else if (current_slot) {
            errorForm.text('Slot is already taken!');
        } 
        else {
            addEvent(eventsCont);
            dragElement();
            childClick();
            dialog.dialog('close');
        }
    }

    function slotValidation(eventsCont) {
        let current_slot = false;
        if($(eventsCont).children().length > 0 ) {
            $(eventsCont).children().each(function() {     
                return current_slot = $(this).find('span:first-child').text().trim() == slot.val();          
            });
        }
        return current_slot;
    }
    
    function addEvent(eventsCont) {
        if(slot.val() == 'AM') {
            $(eventsCont).prepend('<div class="event " style="background-color:' 
            + tint.val() +';  "> <span>'+ slot.val() +'</span>:  '
            + sub.val() +'<span class="ui-icon ui-icon-circle-close"> </span></div>');
        }
        else {
            $(eventsCont).append('<div class="event " style="background-color:' 
            + tint.val() +' ; "> <span>'+slot.val()+'</span>: '
            + sub.val() +'<span class="ui-icon ui-icon-circle-close"></span> </div>');
        }    
    }

    function childClick() {
        $('.event span.ui-icon').click(function() {
            $(this).parent().remove();
        });
    }

    function dragElement() {
        $('.event').draggable( {
            revert : true,
            helper : "clone",
            cursor: "move",   
        });
    }
     
    $('td').droppable( {
        accept  : '.events > div',
        drop: function(event,ui) {
            event_container = $(this).find('.events');
            dropCheck(event_container,ui.draggable)
        }
    });

    function dropCheck(e,ui) {
        let eventslot = false;
        $(e).children().each(function() {
            if($(this).find('span:first-child').text() == $(ui).find('span:first-child').text() ){  
                eventslot =  true;   
            }                
        });
        ui.draggable( {
            revert : eventslot
        })
        
        if(!eventslot) {
            $eventList = $(e).length ? $(e) : $(ui).appendTo( $eventList );
                if($(ui).find('span:first-child').text() == 'PM' ) {
                    $(ui).appendTo( $eventList ).fadeIn();
                }
                else {
                    $(ui).prependTo( $eventList ).fadeIn();
                }
            }
        }
    }
);