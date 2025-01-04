//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

let btn1 = document.querySelector(".cards__card__footer__btn")
btn1.addEventListener( "click", () => {
    btn1.innerHTML = `<section class="cards__card__footer__btn"><button><p>Added to Cart</p></button></section>`
} );

