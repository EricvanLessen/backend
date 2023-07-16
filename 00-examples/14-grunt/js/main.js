// The code uses jQuery to handle a click event on the element with the ID 'my-element'.
// When the document is ready, the event handler function is executed.

$(document).on('ready', function(){
    // Attach a click event handler to the element with the ID 'my-element'
    $('#my-element').click(function(){
        // Inside the click event handler, change the CSS properties of the clicked element
        $(this).css({
            color:'red',
            backgroundColor:'green'
        });
    });
});
