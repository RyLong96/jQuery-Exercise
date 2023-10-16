//When the DOM is ready, console.log the message "Let's get ready to party jQuery!"
$(document).ready((console.log("Let's get ready to party with jQuery!")))

//2. Give all images inside of an article tag the class of image-center(this class is defined inside the style tag in the head).

$('article img').addClass('image-center');

//3. Remove the last paragrah in the article.

$('article p').eq(5).remove();

//4. Set the font size of the title to be a random pizel 
$('#title').css('font-size', Math.random() * 100);

//5. Add an item to the list; it can say whatever you want.
$('ol').append('<li>HERE IS MY NEW LIST ITME</li>')

//6. Scratch that; the list is silly. Empty the aside and put a paragrah in it apologizing for the list's existence.
$('aside ol').remove()
$('aside').append('<h1>SORRY FOR THE LIST</H1>');

//7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

const $red = $('.form-control').eq(0).val();
const $blue = $('.form-control').eq(1).val();
const $green = $('.form-control').eq(2).val();
const color = $red + $blue + $green;
$('body').css('background-color', color)

//8. Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function(e){
    $(this).remove();
})