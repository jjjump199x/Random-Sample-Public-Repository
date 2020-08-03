//UNDONE JAVASCRIPT FOR JQUERY CALENDAR ASSIGNMENT

$(document).ready(function () {
    let eventCont; // Event storage
    let events;
    let slotCont; // Slot storage : selected(AM/PM)

    $("#dialog").dialog({
        autoOpen: false, // Need to click 'td' to open dialog

        buttons: [{
            text: 'Done',
            click: function () {
                let subject = $('#subject-input').val(); // Inputs subject
                let slot = $('#slot-input :selected').text(); // Selects AM/PM slot
                let color = $('#event-color-input').val(); // Inputs color
                
                if (subject == "") { // For empty string check
                    $('#form-error').text("The subject is empty. Please fill in.")
                }
                else if (slotCont.includes(slot)) { // For AM and PM check
                    $('#form-error').text("Slot is already taken.")
                }
                else { // Appends event
                    eventCont.append("<div class = 'drag' style='background-color:" + color + "'>" + slot + ": " + subject + " <button style = 'float: right' class='close-button'>x</button></div>");
                    childClick(); // Calling the remove events function
                    $("#dialog").dialog('close')
                }
            }
        }]
    });

    // Opening dialog when 'td' being clicked
    $('td').click(function () {
        $("#dialog").dialog('open')
        eventCont = $(this).find('.events')
        slotCont = eventCont[0].innerHTML;
        // console.log(eventCont[0].innerHTML);
    })

    // Stop Propagation
    // Stop triggering the event itself in order not to open dialog when the event is clicked
    $(".events").click(function (event) {
        event.stopPropagation();
        events = $(this).find(".drag");

        events.click(function () {
            event.stopPropagation();
            $(this).draggable();
            // cursor: "move";
        });
    })

    // Remove event function
    function childClick (){
        $(".events button.close-button").click(function(){
            $(this).parent().remove();
        })
    }
})