$(document).ready(function(){
    var storedLink;

    console.log('Hello World!')
    $('img').click(function() {
        storedLink = $(this).attr("data-alt-src");  // Make a clone of 'data-alt-src'
        $(this).attr("data-alt-src", $(this).attr("src")) // Change the value of 'data-alt-src'
        $(this).attr("src", storedLink) // Update the value of src
        console.log(storedLink)
    });
})