/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/

const backspace = document.querySelector( "#backspace" );
let editor = document.querySelector( "div#edit" );

backspace.style.cursor = "pointer";
backspace.addEventListener( "click", () => {
    let matn = editor.innerText;
    editor.innerText = matn.slice( 0, matn.length - 1 );

} );

const delet = document.querySelector( "#delet" );
delet.style.cursor = "pointer";
delet.addEventListener( "click", () => {
    let matn = editor.innerText;
    editor.innerText = matn.slice( 0, 0 );
} );

const bold = document.querySelector( "#bold" );
bold.style.cursor = "pointer";
bold.addEventListener( "click", () => {
    editor.style.fontWeight = "800";
} );

const italic = document.querySelector( "#italic" );
italic.style.cursor = "pointer";
italic.addEventListener( "click", () => {
    editor.style.fontStyle = "italic";

} );


