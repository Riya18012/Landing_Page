// header.js
document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');

    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });
});
