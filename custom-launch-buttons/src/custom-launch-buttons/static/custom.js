// TODO add icons 
// TODO add dropdown

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

let addDropdown = (buttons) => {
    // Create a new container for element
    var container = document.createElement('div');
    container.classList.add("dropdown", "dropdown-source-buttons");

    // Create a new button element
    var buttonElement = document.createElement('button');
    buttonElement.classList.add("btn", "dropdown-toggle");
    buttonElement.textContent = buttons.label;
    buttonElement.setAttribute("data-bs-toggle", "dropdown");

    // Propagate through item structure
    container.appendChild(buttonElement);

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
        window.location.href = button.url;
    });

    // Add the button to the page
    return buttonElement
}