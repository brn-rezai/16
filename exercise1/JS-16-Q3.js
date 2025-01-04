// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const x = document.querySelector( ".ri-close-line" );
const m = document.querySelector( ".message" );
x.addEventListener( "click", () => {
    m.style.display = "none";
} );
