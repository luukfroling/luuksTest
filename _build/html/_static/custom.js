// TODO add icons 

const dropdownCSS = `
/* Custom CSS to make the dropdown open on hover */
.dropdown-menu {
display: none; /* Hide the dropdown menu by default */
}
.dropdown-source-buttons:hover .dropdown-menu {
display: block; /* Display the dropdown menu on hover */
}
`

document.addEventListener('DOMContentLoaded', function() {
    // Fetch json file with launch buttons
    fetch('_static/_launch_buttons.json')
    .then((response) => response.json())
    .then((response) => addButtons(response.buttons));

});

let addButtons = (buttons) => {
    // Log for developing
    console.log(buttons)
    // Append launch buttons to the page
    buttons.forEach(function(button) {
        element = button.type == "dropdown" ? addDropdown(button) : addButton(button);
        document.getElementsByClassName('article-header-buttons')[0].prepend(element)
    });
}

/* Structure of dropdown: 
*  <div>
*       <button>
*       <ul> 
*           <li> etc
*       </ul>
*  </div>
*/

let addDropdown = (button) => {
    console.log(button)
    console.log("updated!")
    // Create a new container for full element
    let container = document.createElement('div');
    container.classList.add("dropdown", "dropdown-source-buttons");

    // Create a new <style> element
    var style = document.createElement('style');
    if (style.styleSheet) {
        // For IE
        style.styleSheet.cssText = dropdownCSS;
    } else {
        // For other browsers
        style.appendChild(document.createTextNode(dropdownCSS));
    }
    container.appendChild(style);

    // Create a new button element and set necessary elements
    let buttonElement = document.createElement('button');
    buttonElement.classList.add("btn", "dropdown-toggle");
    buttonElement.textContent = button.label;
    buttonElement.setAttribute("data-bs-toggle", "dropdown");

    console.log(button.icon)
    if(button.icon != undefined) {
        console.log("changin icon")
        buttonElement.innerHTML = button.icon + " " + button.label;
    } 

    // Create dropdown list containing all links
    let dropdownList = document.createElement('ul');
    dropdownList.classList.add("dropdown-menu");

    // Add dropdown items to the list according to the given format
    button.items.forEach(function(b) {
        console.log(b)
        let listItem = document.createElement('li');
        let linkItem = document.createElement('a');

        linkItem.classList.add("btn", "btn-sm", "dropdown-item");
        linkItem.setAttribute("data-bs-placement", "left");
        linkItem.textContent = " - " + b.label;
        linkItem.href = b.url;

        if(b.icon != undefined) linkItem.innerHTML = b.icon + " " + b.label;

        listItem.appendChild(linkItem);
        dropdownList.appendChild(listItem);
    })
    
    // Propagate through item structure
    // buttonElement.appendChild(dropdownList);
    container.appendChild(buttonElement);
    container.appendChild(dropdownList);

    // Return container
    return container
}

let addButton = (button) => {
    // Create a new button element
    var buttonElement = document.createElement('button');

    // Set the button's text and class
    buttonElement.textContent = button.label;
    buttonElement.classList.add("btn", "btn-sm", "navbar-btn");

    // Add an event listener to the button
    buttonElement.addEventListener('click', function() {
        // Execute the specified action when the button is clicked
        if (button.icon != undefined) buttonElement.innerHTML = button.icon + " " + button.label;
        window.location.href = button.url;
    });

    // Add the button to the page
    return buttonElement
}

const book = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>`