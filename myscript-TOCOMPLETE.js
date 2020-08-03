$(document).ready(function() {
    
    // !! Don't delete those lines!!
    $('#description-hidden').hide();
    $('input#name-input').hide();
    
    
    // Question 1: Animate the logo! make it bigger by 50px when hovered
    // Attention: when mouse exits the logo, it should go back to its original size
    $(document).ready(function() {
        $('#logo').hover(function() {
            $(this).css('height','150px');
    }, function() {
            $(this).css('height','100px');
        })
    })

    // Question 2: When you click on 'Toggle PN Theme', color all the headers in blue, and the other texts in orange
    // Bonus: when you click again on the button, colors should be back to normal
    // $('#toggle-theme').click(function() {

    // }

    // Question 3: When you click on the 'show more' button, you should see the rest of the paragraph,
    // and 'show more' should become 'show less'.
    // When you click the 'show less' button, you should hide the rest of the paragraph, 
    // and 'show less' should become 'show more'
    $('#more').click(function() {
        if ($(this).text() === 'show more') {
            $(this).text('show less');
            $('#description-hidden').show();
        } else {
            $(this).text('show more');
            $('#description-hidden').hide();
        }
    });

    
    // Question 4: When you click 'Edit' button next to the name, it should toggle the display of the editable input next to the button
    $('#edit-name-btn').on('click', function() {
        $('#name-input').show();
    });
    
    // Question 5: When you change the name in that input, it should update the name in the text, and hide the input
    $('input#name-input').change(function() {
        $('#name').text($('#name-input').val());
        $('#name').addClass('edited');
        $('#name-input').hide();
    });

    // Question 6: When you click the + button, age should increase by 1
    $('#increase-age').on('click', function() {
        $('#age').text(parseInt($('#age').text()) + 1);
        $('#age').addClass("edited");
    });
    
    // Question 6b: When you click the - button, age should decrease by 1
    $('#decrease-age').on('click', function() {
        $('#age').text(parseInt($('#age').text()) - 1);
        $('#age').addClass("edited");
    });

    // Question 7: When you change the age or the name, the changed text should become bold and italic
    // Tip: look at the CSS classes already available to you in the HTML files
    // $(document).change(function) {
    //     $('#name').addClass('edited');
    //     $('#age').addClass('edited');
    // }

    // Question 8: When you input a new skill, it should append to the list
    $('input#skill-input').change(function() {
        $('#skills-list').append("<span>" + $('#skill-input').val() + "</span>");
    });

    // Question 9: when you click the X button on a todo, delete the corresponding item from the table
    $('.remove-btn').click(function() {
        $(this).parents('tr').remove();
    });
    
    // Question 9b: When you click the 'Delete All' button, it should delete all items from the table
    $('#delete-all').click(function() {
        $('#todos').remove();
    });
    
    // Question 10: When you click the 'Complete' button on a todo, it should move the corresponding 
    // item to the Completed list
    // Optional: after moving the element, delete the 'Complete' button
    $('.complete-btn').click(function() {

    });
    
    // Question 10b: When you click the 'Complete all' button, it should move ALL todos to the Completed list
    // Optional: after moving the elements, delete every 'Complete' button

    // Question 11: when the 'Retrieve old comments' button is clicked, GET the comments from
    // https://testapi.io/api/reneab/comments
    // and display them at the BEGINNING of the comments list  
    $('#get-comments-btn').click(function() {

    });
    
    // Question 12: when the 'Submit' button is clicked for a comment, POST the new comment 
    // (and the user name) to https://testapi.io/api/reneab/comments/new
    // If response is a success:
    // 1) display the Response message
    // 2) display the new comment in the comments list 
    // 3) clear the inputs
    $('#submit-comment-btn').click(function() {

    });

})