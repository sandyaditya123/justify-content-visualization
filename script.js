// Get all elements
const codes = document.querySelectorAll('.code');
const items = document.getElementById('items');

// Add an event listener for each code
codes.forEach((code) => {
    code.addEventListener('click', function () {
        // Remove the ‘active’ class from the previous code
        codes.forEach((code) => {
            code.classList.remove('active');
        });
        // Add the ‘active’ class to the code that was just clicked
        code.classList.add('active');

        /*  Compares ID matches when the code is clicked.
        If there is a match, the following code block 
        will be executed according to the ID name */
        switch (code.id) {
            case 'start':
                items.style.justifyContent = 'flex-start';
                break;
            case 'center':
                items.style.justifyContent = 'center';
                break;
            case 'end':
                items.style.justifyContent = 'flex-end';
                break;
            case 'space-around':
                items.style.justifyContent = 'space-around';
                break;
            case 'space-between':
                items.style.justifyContent = 'space-between';
                break;
            default:
                items.style.justifyContent = 'space-evenly';
                break;
        }
    });
});
