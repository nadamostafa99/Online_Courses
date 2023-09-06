document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('showButton');
    const hiddenText = document.getElementById('hiddenText');
    const showButton2 = document.getElementById('showButton2');
    const hiddenText2 = document.getElementById('hiddenText2');
    const showButton3 = document.getElementById('showButton3');
    const hiddenText3 = document.getElementById('hiddenText3');
    const showButton4 = document.getElementById('showButton4');
    const hiddenText4 = document.getElementById('hiddenText4');
    // Set initial visibility state
    hiddenText.style.display = 'none';

    // Add a click event listener to the button
    showButton.addEventListener('click', function() {
        // Toggle the visibility of the hidden text
        if (hiddenText.style.display === 'none') {
            hiddenText.style.display = 'block';
        } else {
            hiddenText.style.display = 'none';
        }
    });


    showButton2.addEventListener('click', function() {
        // Toggle the visibility of the hidden text
        if (hiddenText2.style.display === 'none') {
            hiddenText2.style.display = 'block';
        } else {
            hiddenText2.style.display = 'none';
        }
    });

    showButton3.addEventListener('click', function() {
        // Toggle the visibility of the hidden text
        if (hiddenText3.style.display === 'none') {
            hiddenText3.style.display = 'block';
        } else {
            hiddenText3.style.display = 'none';
        }
    });
    showButton4.addEventListener('click', function() {
        // Toggle the visibility of the hidden text
        if (hiddenText4.style.display === 'none') {
            hiddenText4.style.display = 'block';
        } else {
            hiddenText4.style.display = 'none';
        }
    });
});
