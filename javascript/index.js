 'use strict'; //Directive that requires all variables must be declared -let/var

 //create some title object
 let titleObject = {
    title_text: 'Hello, this is my first JS code',
    title_color: 'blue'   
 };

 const header = document.getElementById('message');
 header.textContent = titleObject.title_text;
 header.style.color = titleObject.title_color;

 // Example of dynamic show/hide feature on HTML elements
 const button = document.getElementById("button_click_id");
 button.addEventListener('click', function() { 

    const show_hide = document.getElementById('show_hide');
    
    if (show_hide.style.display === "none")
    {
        // Show element and set up proper message to the button
        show_hide.style.display = "block";
        button.textContent = "Hide element";
    }
    else
    {
        // hide element and set up proper message to the button
        show_hide.style.display = "none";
        button.textContent = "Show element";
    }
 });

 // Example of saving multiple HTML elements into array
 const containers = document.getElementsByClassName('container');
 // hide last container
 containers[3].style.display ="none";
 // Even we're hiding 4th container from the UI, it still persist
 console.log(containers);
