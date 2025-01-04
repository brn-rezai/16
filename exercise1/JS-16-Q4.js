// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll( ".stars i" );

for ( let s of stars ) {
    s.addEventListener( "click", () => {
        if ( getComputedStyle( s ).color == "rgb(230, 230, 230)" ) {
            s.style.color = "rgb(255, 215, 0)";
        } else if ( getComputedStyle( s ).color == "rgb(255, 215, 0)" ) {
            s.style.color = "rgb(230, 230, 230)";
        }

    } );
}

